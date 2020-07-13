import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../core/http.auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor( private httpService: HttpService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  password = new FormControl('', [
    Validators.required,
    //
  ])

  getErrorMessageEmail = () => {} 

  getErrorMessagePassword = () => {}

  addUser = () => {
    this.httpService.postUser(this.email.value, this.password.value).subscribe(res => {
      if(res.password === this.password.value) {
        this.router.navigateByUrl('/category/:id');
      }
    });
  }
    // this.httpService.postUser(this.email.value, this.password.value).subscribe(res => {
    //   if (res.email) {
    //     localStorage.setItem('userName', res.display_name);
    //     this.router.navigateByUrl('/category/:id');
    //   }
    // })
}
