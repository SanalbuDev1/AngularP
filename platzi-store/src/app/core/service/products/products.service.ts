import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:Product[];

  constructor(private http: HttpClient) { 

  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.url}`)
  }

  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${environment.url}/${id}`)
  }

  createProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(`${environment.url}`,product);
  }

  editProduct(id:string, changes:Partial<Product>): Observable<Product>{
    return this.http.put<Product>(`${environment.url}/${id}`,changes);
  }

  deleteProduct(id:string): Observable<Product>{
    return this.http.delete<Product>(`${environment.url}/${id}`);
  }

  
}
