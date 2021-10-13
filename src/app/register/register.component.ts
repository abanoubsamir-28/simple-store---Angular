import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup ;
  constructor(private router: Router , private fb : FormBuilder) { }

  toLogin() {
    this.router.navigate(['login']);
  }
  submitRegister() {
    console.log(this.registerForm.controls.username)
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name : [null,[Validators.required]] ,
      email :[null,[Validators.required , Validators.email]] ,
      username:[null,[Validators.required , Validators.pattern('/^\S*$/')]] ,
      password:[null,[Validators.required , Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')]] ,
      confirmPassword:[null,[Validators.required]]
    })
  }

}
