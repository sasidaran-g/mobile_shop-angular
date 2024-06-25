import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  customerform!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private service: ApiserviceService
  ) {}

  ngOnInit(): void {
    this.customerform = this.formbuilder.group({
      customerid: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
      customername: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
      age: ['', [Validators.required,Validators.minLength(1)]],
      gender: ['', Validators.required],
      designation: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      aadharnumber: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      mobileno: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    });
  }

  onSubmit():void{
    if(this.customerform.valid){
      console.log(this.customerform.value);
      this.service.insertCustomer(this.customerform.value).subscribe((response)=>{
        console.log("result for customer insert",response);
        this.customerform.reset();
      },(error)=>{
        console.log("error in customer insert",error)
      });
    } else {
      console.log("form is invalid!");
    }
  }
}
