import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  readData: any[] = [];

  constructor(private service: ApiserviceService) {}

  ngOnInit(): void {
    this.loadAdmin();
  }

  public loadAdmin(): void {
    this.service.getAdmin().subscribe(
      (response: any) => {
        console.log('response for admin-->', response);
        this.readData = response.data;
      },
      (error) => {
        console.log('error in admin get', error);
      }
    );
  }
}
