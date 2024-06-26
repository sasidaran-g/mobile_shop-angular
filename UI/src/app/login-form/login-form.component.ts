import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';
// import {
//   GoogleLoginProvider,
//   SocialAuthService,
// } from '@abacritt/angularx-social-login';
import { from } from 'rxjs';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public invalidUser: any = false;
  public loginUserId: any;
  constructor(
    private service: ApiserviceService,
    private authService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  googleLogin() {
    return from(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID));
  }
  logInGoogle() {
    this.googleLogin().subscribe((user) => {
      let payload = {
        emailId: user.email,
      };
      console.log(payload);
      this.service.userLogin(payload).subscribe((res) => {
        const { status, data } = res;
        this.loginUserId = data.userId;
        console.log(this.loginUserId);
        {
          if (status === 'success') {
            this.invalidUser = false;
            localStorage.setItem('myToken', user.authToken);
            localStorage.setItem('emailId', data.emailId);
            localStorage.setItem('currentApp', 'onlineshop');
            this.router.navigate(['/firstpage']);
          } else {
            this.invalidUser = true;
            alert('Error!! :-)\n\n ' + data);
          }
        }
      });
    });
  }
}
