import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  readData: any[] = [];
  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {
    this.loadProduct();
  }
  public loadProduct(): void {
    this.service.getProduct().subscribe(
      (response: any) => {
        console.log('response for product-->', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error in product get', error);
      }
    );
  }
}
