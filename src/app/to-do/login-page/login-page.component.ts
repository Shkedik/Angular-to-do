import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  password = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  getErrorMessageEmail = () => {} 

  getErrorMessagePassword = () => {}

}
