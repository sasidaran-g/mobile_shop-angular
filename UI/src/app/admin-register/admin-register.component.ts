import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss'],
}) 
export class AdminRegisterComponent implements OnInit {
  adminName: string = '';
  age: string = ''; 
  gender: string = '';
  email: string = '';
  password: string = '';
  constructor(private route: Router,private service:ApiserviceService) {}

  ngOnInit(): void {}
  onSubmit(): void {
    console.log(this.adminName);
    console.log(this.age);
    console.log(this.gender);
    console.log(this.email);
    console.log(this.password);
    if (this.email !== '' || this.password !== '' || this.gender !== '' || this.age !== '' || this.adminName !=='') {
      this.service.adminRegister(this.adminName,this.age,this.gender,this.email,this.password).subscribe(
        (response)=>{
          console.log("response from server==>",response);
          alert('Registered Successfully!!!');
          this.route.navigate(['/admin-login']);
        },(error)=>{
          console.log("error",error);
          alert('Invalid Detials!!');
        }
      )
    } else {
      alert("Please fill the form!");
    }
  }
}
