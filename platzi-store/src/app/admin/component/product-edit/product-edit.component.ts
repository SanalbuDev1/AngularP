import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/service/products/products.service';
import { MyValidators } from '../../../utils/validators';
import { Product } from '../../../product.model';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  productEdit: Product;
  id:string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute:ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params:Params) => {
        this.id = params.id;
        this.productsService.getProduct(this.id).subscribe(
          (productConsultado) => {
            return this.form.patchValue(productConsultado)
          }
        )
      }
    )
  }

  editProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.editProduct(this.id,product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({   
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid, Validators.pattern("[0-9]+")]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }

  get descriptionField() {
    return this.form.get('description');
  }

}



