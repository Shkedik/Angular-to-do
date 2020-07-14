import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../core/auth/http.auth.service';
import { ValidateEqualModule } from 'ng-validate-equal';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  blocked:boolean;
  
  constructor( private httpService: HttpService,
    private router: Router ) {
     }
  
  ngOnInit(): void {

  }

  // passwordMatch = (control: FormGroup) => {
  //   return this.password === this.confirmPassword ? null : { notSame: true};
  // }

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
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
    ])
  });

  email = this.dataFormGroupControl.get('email');
  password = this.dataFormGroupControl.get('password');
  confirmPassword = this.dataFormGroupControl.get('confirmPassword');

  getErrorMessageEmail = () => {} 

  getErrorMessagePassword = () => {}

  addUser = () => {
    if (!this.blocked) {
      this.httpService.postUser(this.email.value, this.password.value).subscribe(res => {
        if(res.password === this.password.value) {
          localStorage.setItem('encodedJwt', res.encodedJwt);
          localStorage.setItem('expiredDate', res.expiredDate);
          this.router.navigateByUrl('/category');
        }
      });
    }
  }
    // this.httpService.postUser(this.email.value, this.password.value).subscribe(res => {
    //   if (res.email) {
    //     localStorage.setItem('userName', res.display_name);
    //     this.router.navigateByUrl('/category/:id');
    //   }
    // })

  returnLogin = () => {
    this.router.navigateByUrl('/auth/login');
  }
}

