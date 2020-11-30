import {
     Component, 
     Input,
     Output, 
     EventEmitter, 
     OnChanges,
     OnDestroy,
     DoCheck ,
     OnInit,
     SimpleChange } from "@angular/core";
import { Product } from '../../../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements /*OnChanges*/OnDestroy,DoCheck , OnInit{

    @Input() product: Product;
    @Output() productClicked: EventEmitter<Product> = new EventEmitter<Product>();

    today = new Date();

    constructor(){
        console.log("constructor");
    }

    /*ngOnChanges(changes: SimpleChange){
          console.log(changes);      
    }*/

    ngOnInit(): void {
        console.log('ngOnInit');        
    }

    ngDoCheck(): void {
        console.log('doCheck');     
    }

    ngOnDestroy(): void {
        console.log('OnDestroy');     
    }

    addCart(){
        console.log("agregar al carrito");
        this.productClicked.emit(this.product);
    }

}