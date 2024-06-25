import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
})
export class CustomerTableComponent implements OnInit {
  readData: any[] = [];

  constructor(private service: ApiserviceService) {}
 
  ngOnInit(): void {
    this.loadCustomer();
  }
  public loadCustomer(): void {
    this.service.getCustomer().subscribe(
      (response: any) => {
        console.log('response for customer-->', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error in customer get', error);
      }
    );
  }
}
