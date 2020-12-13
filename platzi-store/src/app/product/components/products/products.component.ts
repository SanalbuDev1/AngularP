import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/service/products/products.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor( private prod:ProductsService) { 
    //this.products = prod.getAllProducts();
  }

  ngOnInit() {
    this.fecthProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fecthProducts() {
    this.prod.getAllProducts().subscribe( productss => this.products = productss )
  }

}
