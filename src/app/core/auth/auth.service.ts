import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    public postUserRegister(email: string, password: string, confirmPassword: string): Observable<any> {
        const body = {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
         return this.http.post("http://localhost:64701/api/auth/register", body)    
    }

    public postUserLogin(email: string, password: string): Observable<any> {
        const body = {
            email: email,
            password: password
        }
         return this.http.post("http://localhost:64701/api/auth/login", body)    
    }

    loggedIn() {
        return !!localStorage.getItem('encodedJwt');
    }

    // public getUser(email: string):  Observable<any> {
    //     return this.http.get(`https://localhost:64701/api/auth/login/${email}`);
    // }
} 