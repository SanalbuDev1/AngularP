import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './component/product-list/product-list.component';
import { NavComponent } from './component/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './component/table/table.component';
import { DashboarComponent } from './component/dashboar/dashboar.component';
import { TreeComponent } from './component/tree/tree.component';
import { FormProductsComponent } from './component/form-products/form-products.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';









@NgModule({
  declarations: [ProductFormComponent, ProductListComponent, NavComponent, TableComponent, DashboarComponent, TreeComponent, FormProductsComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    LayoutModule    
  ]
})
export class AdminModule { }
