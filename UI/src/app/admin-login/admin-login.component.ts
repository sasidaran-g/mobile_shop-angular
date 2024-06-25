import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private service: ApiserviceService, private route: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.email);
    console.log(this.password);
    this.service.adminCheck(this.email, this.password).subscribe(
      (response) => {
        if (response.user) {
          alert('Login Successfully!');
          console.log('response from server(admin login)', response);
          this.route.navigate(['/admin']);
        } else {
          alert('Invalid Detials!!!');
        }
      },
      (error) => {
        alert('Invalid credentials');
        console.log('error in login', error);
        this.resetlogin();
      }
    );
  }
  resetlogin() {
    this.email = '';
    this.password = '';
  }
}
