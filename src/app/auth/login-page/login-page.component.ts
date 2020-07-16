import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  blocked:boolean;

  constructor( private httpService: AuthService,
    private router: Router ) {
     }
  ngOnInit(): void { }

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

  loginUser = () => {
    console.log('click')
    var value = this.dataFormGroupControl.getRawValue();

    this.httpService.postUserLogin(value.email, value.password).subscribe(res => {
      localStorage.setItem('encodedJwt', res.encodedJwt);
      localStorage.setItem('expiredDate', res.expiredDate);
      this.router.navigate(['/item/add']);      
    });
  }
}
