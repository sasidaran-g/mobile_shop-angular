import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  username: string = '';
  age: string = ''; 
  gender: string = '';
  email: string = '';
  password: string = '';
  constructor(private service: ApiserviceService, private route: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.username);
    console.log(this.age);
    console.log(this.gender);
    console.log(this.email);
    console.log(this.password);
    if (this.email !== '' || this.password !== '' || this.gender !== '' || this.age !== '' || this.username !=='') {
      this.service.registerCheck(this.username,this.age,this.gender,this.email, this.password).subscribe(
        (response) => {
          console.log('response', response);
          alert('Registered Successfully!!!');
          this.route.navigate(['/login-form']);
        },
        (error) => {
          console.log('error', error);
          alert('Invalid Detials!!');
        } 
      );
    } else {
      alert('Please fill the Form!');
    }
  }
}
