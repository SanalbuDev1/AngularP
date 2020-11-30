import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



const ROUTES:Routes = [
    {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
];
@NgModule({
    imports:[
        RouterModule.forChild(ROUTES),
    ],
    exports:[
        RouterModule
    ]
})

export class ProductRoutingModule{}