import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';

@Component({ 
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productform!: FormGroup;
  percentage: any;

  constructor(
    private formbuilder: FormBuilder,
    private service: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.productform = this.formbuilder.group({
      productid: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(6)],
      ],
      productname: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(6)],
      ],
      modalnumber: ['', [Validators.required, Validators.minLength(2)]],
      productprice: ['', Validators.required],
      taxpercentage: ['', Validators.required],
      quantity: ['', Validators.required],
      companyid: ['', Validators.required],
      companyname: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.productform.valid) {
      const formval = { ...this.productform.value };
      this.percentage = (formval.productprice / 100) * formval.taxpercentage;
      formval.cgst = parseInt(this.percentage);
      formval.sgst = parseInt(this.percentage);
      formval.totalamount =
        (formval.cgst + formval.sgst + formval.productprice) * formval.quantity;
      console.log('form submitted', formval);
      this.service.insertProduct(formval).subscribe(
        (response) => {
          console.log('response for product insert-->', response);
          this.productform.reset();
        },
        (error) => {
          console.log('error in product', error);
        }
      );
    } else {
      console.log('form is invalid');
    }
  }
}
