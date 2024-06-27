import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { from } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public invalidUser: any = false;
  public loginUserId: any;
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private service: ApiserviceService
  ) {}

  ngOnInit(): void {}
}
