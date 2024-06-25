import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-deliver-table',
  templateUrl: './deliver-table.component.html',
  styleUrls: ['./deliver-table.component.scss'],
})
export class DeliverTableComponent implements OnInit {
  readData: any[] = [];
  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {
    this.loadDeliver();
  }

  public loadDeliver(): void {
    this.service.getDeliver().subscribe(
      (response: any) => {
        console.log('response for deliver', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error in deliver', error);
      }
    );
  }
}
