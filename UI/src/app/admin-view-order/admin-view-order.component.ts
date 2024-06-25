import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-view-order',
  templateUrl: './admin-view-order.component.html',
  styleUrls: ['./admin-view-order.component.scss'],
})
export class AdminViewOrderComponent implements OnInit {
  labelform!: FormGroup;
  cusID: any;
  readData: any;
  orderId: number | null = null;

  constructor(
    private service: ApiserviceService,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.cusID = params['id'];
      console.log(this.cusID);
    });
    this.getOrders();
    this.labelform = this.formbuilder.group({
      labelmenu: ['', Validators.required],
    });
  }

  setOrderId(orderId: number): void {
    this.orderId = orderId;
    console.log(orderId);
  }

  labelStatus(): void {
    if (this.labelform.valid) {
      console.log(this.labelform.value);
      console.log(this.orderId);
      this.service.insertStatus(this.orderId, this.labelform.value).subscribe(
        (response) => {
          console.log('response==>', response);
          this.labelform.reset();
          this.getOrders();
        },
        (error) => {
          console.log('error', error);
        }
      );
    } else {
      console.log('form is invalid!');
    }
  }

  public getOrders(): void {
    this.service.getAdminOrder(this.cusID).subscribe(
      (response: any) => {
        console.log('response admin order==>', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error in admin order', error);
      }
    );
  }

  getRowStyle(status: string) {
    switch (status) {
      case 'processing':
        return { backgroundColor: 'blue' };
      case 'delivered':
        return { backgroundColor: 'green' };
      case 'cancelled':
        return { backgroundColor: 'red' };
      case 'new':
        return { backgroundColor: 'yellow' };
      default:
        return {};
    }
  }
}
