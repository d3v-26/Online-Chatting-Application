import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  get resetEmail() { return this.resetForm.get('resetEmail') }
  resetForm: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      resetEmail: new FormControl("", [Validators.required, Validators.email])
    })
  }
  onResetSubmit(){
    console.log(this.resetForm.value);
  }
}
