import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  registerForm: FormGroup
  get loginUsername() { return this.loginForm.get('loginUsername') }
  get loginPassword() { return this.loginForm.get('loginPassword') }
  get loginIsPersistent() { return this.loginForm.get('loginIsPersistent') } 
  get registerUsername() { return this.registerForm.get('registerUsername') }
  get registerPassword() { return this.registerForm.get('registerPassword') }
  get registerRpassword() { return this.registerForm.get('registerRpassword') }
  get registerEmail() { return this.registerForm.get('registerEmail') }
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginUsername: new FormControl("", Validators.required),
      loginPassword: new FormControl("",Validators.required),
      loginIsPersistent: new FormControl(true)   
    });
    this.registerForm = new FormGroup({
      registerUsername: new FormControl("", Validators.required),
      registerPassword: new FormControl("",Validators.required),
      registerRpassword: new FormControl("", Validators.required),
      registerEmail: new FormControl("", [Validators.required, Validators.email])
  
    });
  }

  onLoginSubmit(){
    if(this.loginForm.invalid)
    {
      return;
    }

  }

  onRegisterSubmit(){
    if(this.registerForm.invalid)
    {
      return;
    }
  }

}
