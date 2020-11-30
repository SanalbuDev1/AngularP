import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact.component';



const ROUTES:Routes = [
    {
        path: '',
        component: ContactComponent
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

export class ContactRoutingModule{}