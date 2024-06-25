import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private service: ApiserviceService, private route: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.email);
    console.log(this.password);
    this.service.loginCheck(this.email, this.password).subscribe(
      (response) => {
        if (response.user) {
          alert('Login Successfully!');
          console.log('response from server(login)', response);
          this.route.navigate(['/firstpage']);
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
