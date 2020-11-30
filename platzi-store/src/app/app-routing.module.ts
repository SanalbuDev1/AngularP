import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

//import { ProductsComponent } from './products/products.component';
//import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [


  {
    path:'404',
    component:PageNotFoundComponent
  },
 
  
  {
    path:'',
    component:LayoutComponent,
    children:[ 
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path:'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        canActivate:[AdminGuard]
      },     
      {
        path:'demo',
        component:DemoComponent
      }
    ]
},
{path: '**', redirectTo: '/home'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
