import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  
  constructor( private httpService: AuthService,
    private router: Router ) {
      
     }
  
  ngOnInit(): void {

  }
  confirmPasswordValidator(fGroup: FormControl) {
    const password = fGroup.get('password').value;
    const confirmPassword = fGroup.get('confirmPassword').value;

    if (password !== confirmPassword) {
      fGroup.get('confirmPassword').setErrors( {mismatch: true} )
    } else {
      return null
    }
  }

  dataFormGroupControl = new FormGroup({
    email: new FormControl('', [
      Validators.minLength(4), 
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.minLength(6), 
      //pattern
    ]),
    confirmPassword: new FormControl('', [])
  },{
      validators: this.confirmPasswordValidator
    }
  ); 

  addUser = () => {
    var value = this.dataFormGroupControl.getRawValue();

    this.httpService.postUserRegister(value.email, value.password, value.confirmPassword).subscribe(res => {
      localStorage.setItem('encodedJwt', res.encodedJwt);
      localStorage.setItem('expiredDate', res.expiredDate);
      this.router.navigateByUrl('/category');
    });
  }
    // this.httpService.postUser(this.email.value, this.password.value).subscribe(res => {
    //   if (res.email) {
    //     localStorage.setItem('userName', res.display_name);
    //     this.router.navigateByUrl('/category/:id');
    //   }
    // })
}

