import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const ROUTES:Routes = [
    {
        path:'',
        component:HomeComponent
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

export class HomeRoutingModule{}