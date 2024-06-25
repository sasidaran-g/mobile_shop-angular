import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss'],
})
export class ViewOrderComponent implements OnInit {
  cusID: any;
  readData: any; 

  constructor(
    private service: ApiserviceService,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.cusID = params['id'];
      console.log(this.cusID);
    });
    this.getOrders();
  }

  public getOrders(): void {
    this.service.getOrder(this.cusID).subscribe(
      (response: any) => {
        console.log('response order==>', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error in order', error);
      }
    );
  }
}
