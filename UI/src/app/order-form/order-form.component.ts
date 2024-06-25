import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  orderform!: FormGroup;
  cusID: any;
  cusid: any;
  orderFormArray: object[] = [];

  // array
  categories: string[] = [];
  companies: string[] = [];
  products: string[] = [];
  // string
  selectedCategory: string = '';
  selectedCompany: string = '';
  selectedProduct: string = '';
  constructor(
    private route: ActivatedRoute,
    private service: ApiserviceService,
    private formbuild: FormBuilder
  ) {}

  get isNetBanking(): boolean {
    return this.orderform.get('payment')?.value === 'netbanking';
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.cusID = params['id'];
      console.log(this.cusID);
      this.cusid = +this.cusID;
    });
    this.category();

    this.orderform = this.formbuild.group({
      customerid: [this.cusid, Validators.required],
      category: ['', Validators.required],
      company: ['', Validators.required],
      product: ['', Validators.required],
      productid: ['', Validators.required],
      modalnumber: ['', Validators.required],
      productprice: ['', Validators.required],
      cgst: ['', Validators.required],
      sgst: ['', Validators.required],
      taxpercentage: ['', Validators.required],
      totalamount: ['', Validators.required],
      payment:['',Validators.required],
      bank: ['']
    });
  }


  category(): void {
    this.service.getCategory().subscribe(
      (response: any) => {
        console.log('response category==>', response);
        const resVal = response.data;
        this.categories = resVal.map((item: any) => item['category_Name']);
      },
      (error) => {
        console.log('error in category', error);
      }
    );
  }

  onCategoryChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    this.service.getCompany(this.selectedCategory).subscribe(
      (response: any) => {
        const resVal = response.data;
        this.companies = resVal.map((item: any) => item['company_name']);
      },
      (error) => {
        console.log('error in company', error);
      }
    );
  }

  onCompanyChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCompany = selectElement.value;
    console.log('selected company:', this.selectedCompany);
    this.service
      .getmyProduct(this.selectedCompany)
      .subscribe((response: any) => {
        const resVal = response.data;
        this.products = resVal.map((item: any) => item['Product_Name']);
        if (resVal.length == 0) {
          console.log('not availabel!');
          alert('product not available!!!');
        }
      });
  }

  onProductChange(event: Event): void {
    const selectedElement = event.target as HTMLSelectElement;
    this.selectedProduct = selectedElement.value;
    console.log('selected product:', this.selectedProduct);
    this.service.getSelectedProduct(this.selectedProduct).subscribe(
      (response: any) => {
        console.log('response selected product', response);
        const resVal = response.data[0];
        const total = resVal['Product_Price'] + resVal['CGST'] + resVal['SGST'];
        const finaltotal = total * 1;
        const form = this.orderform;
        form.controls['productid'].setValue(resVal['Product_ID']);
        form.controls['modalnumber'].setValue(resVal['Modal_Number']);
        form.controls['productprice'].setValue(resVal['Product_Price']);
        form.controls['taxpercentage'].setValue(resVal['Tax']);
        form.controls['cgst'].setValue(resVal['CGST']);
        form.controls['sgst'].setValue(resVal['SGST']);
        form.controls['totalamount'].setValue(finaltotal);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  onAdd(): void {
    if (this.orderform.valid) {
      console.log(this.orderform.value);
      this.orderFormArray.push(this.orderform.value);
      this.resetFormExceptCustomerId();
    } else {
      console.log('form is invalid!');
    }
  }

  resetFormExceptCustomerId(): void {
    const customerid = this.orderform.get('customerid')?.value;
    this.orderform.reset({
      customerid: customerid,
    });
  }

  onSubmit(): void {
    if (this.orderform.valid) {
      console.log("submit:-",this.orderform.value);
      this.orderFormArray.push(this.orderform.value);
      var GrandTotal = 0;
      this.orderFormArray.forEach((obj: any) => {
        GrandTotal += obj.totalamount;
      });
      this.orderFormArray.forEach((obj: any) => {
        obj.grandtotal = GrandTotal;
        obj.totalquantity = this.orderFormArray.length;
      });
      console.log(this.orderFormArray);
      this.service.insertOrder(this.orderFormArray).subscribe(
        (response) => {
          console.log('resposne for insert order-->', response);
          alert('ordered succesfully!!');
        },
        (error) => {
          console.log('error in insert order', error);
        }
      );
    } else {
      console.log('form is invalid');
    }
  }
}
