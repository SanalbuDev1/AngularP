import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { NavComponent } from './component/nav/nav.component';
import { TableComponent } from './component/table/table.component';
import { TreeComponent } from './component/tree/tree.component';
import { DashboarComponent } from './component/dashboar/dashboar.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FormProductsComponent } from './component/form-products/form-products.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';

const routes: Routes = [
  
  {
  path:'',
  component:NavComponent,
  children: [
    {
      path:'create',
      component:ProductFormComponent
      },
      {
      path:'table',
      component:TableComponent
      },
      {
      path:'dashboard',
      component:DashboarComponent
      },
      {
      path:'tree',
      component:TreeComponent
      },
      {
      path:'products',
      component:ProductListComponent
      },
      {
      path:'products/create',
      component:FormProductsComponent
      },
      {
        path:'products/edit/:id',
        component:ProductEditComponent
        }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
