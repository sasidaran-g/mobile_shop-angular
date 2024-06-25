import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss'],
})
export class SupplierFormComponent implements OnInit {
  supplierform!: FormGroup; 

  constructor(
    private formbuilder: FormBuilder,
    private service: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.supplierform = this.formbuilder.group({
      supplierid: ['', Validators.required],
      suppliername: ['', Validators.required],
      phoneno: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      productname: ['', Validators.required],
      pricepereach: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.supplierform.valid) {
      const formval = { ...this.supplierform.value };
      formval.totalamount =
        parseInt(formval.pricepereach) * parseInt(formval.quantity);
      console.log(formval);
      this.service.insertSupplier(formval).subscribe(
        (response) => {
          console.log('response for supplier insert-->', response);
          this.supplierform.reset();
        },
        (error) => {
          console.log('error in supplier', error);
        }
      );
    } else {
      console.log('form is invalid');
    }
  }
}
