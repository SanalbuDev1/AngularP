import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/service/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id:string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      //this.productsService.getProduct(id).subscribe(product => this.product = product);
      this.fetchProduct(this.id);
    });
  }

  fetchProduct(id:string){
    this.productsService.getProduct(id).subscribe(
      (product) => {
        this.product = product;
      }
    );
  }

  createProduct(){
    const newProduct:Product = {
      id:'222',
      title:'nuevo desde angular',
      image: 'assets/images/camiseta.png',
      price:1100,
      description:'modificado producto'
    }

    this.productsService.createProduct(newProduct).subscribe(
      (product) => {
        console.log(product);
      }
    )
  }

  editarProducto(){
   

    const updateProduct: Partial<Product> = {     
      price:23000,
      description:'producto editado'
    }

    this.productsService.editProduct(this.id,updateProduct).subscribe(
      (product) => {
        console.log(product);
      }
    )
  }

  eliminarProduct(){
    this.productsService.deleteProduct(this.id).subscribe( pr => console.log("eliminado"));
  }

  

}
