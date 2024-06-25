import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-supplier-table', 
  templateUrl: './supplier-table.component.html',
  styleUrls: ['./supplier-table.component.scss'],
})
export class SupplierTableComponent implements OnInit {
  readData: any[] = [];
  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {
    this.loadSupplier();
  }

  public loadSupplier(): void {
    this.service.getSupplier().subscribe(
      (response: any) => {
        console.log('response for supplier-->', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error in supplier get', error);
      }
    );
  }
}
