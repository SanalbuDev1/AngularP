import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/service/products/products.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor(private productService: ProductsService) {
    this.products = productService.getAllProducts();
   }

  ngOnInit(): void {
  }

  clickReadProductChild(product:Product){
    console.log("product father print child " + product.id + " name" + product.title);
  }
  
}
