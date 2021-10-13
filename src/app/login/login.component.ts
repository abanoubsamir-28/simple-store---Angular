import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  singInForm!: FormGroup;
  signInForm = new FormGroup({
    email : new FormControl("" , [Validators.required , Validators.email]) ,
    password: new FormControl("" ,[Validators.required])
  })
  submitLoginForm(){
    console.log(this.signInForm);
    this.router.navigate(['']) ;
    return this.signInForm.value ;
  }
  toRegiser() {
    this.router.navigate(['register']) ;
  }
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
