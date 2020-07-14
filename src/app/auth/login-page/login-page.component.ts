import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../core/auth/http.auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  blocked:boolean;

  constructor( private httpService: HttpService,
    private router: Router ) {
     }
  ngOnInit(): void {

    }

  dataFormGroupControl = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4), 
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6), 
      //pattern
    ])
  });

  email = this.dataFormGroupControl.get('email');
  password = this.dataFormGroupControl.get('password');


  getErrorMessageEmail = () => {} 

  getErrorMessagePassword = () => {}

  loginUser = () => {
    if (!this.blocked) {
      this.httpService.postUser(this.email.value, this.password.value).subscribe(res => {
        localStorage.setItem('encodedJwt', res.encodedJwt);
        localStorage.setItem('expiredDate', res.expiredDate);
        this.router.navigate(['/category']);      
      });
    }
  }
    // this.httpService.postUser(this.email.value, this.password.value).subscribe(res => {
    //   if (res.email) {
    //     localStorage.setItem('userName', res.display_name);
    //     this.router.navigateByUrl('/category/:id');
    //   }
    // })


  sendToRegister = () => {
    this.router.navigateByUrl('/api/auth/register');
  }
}
