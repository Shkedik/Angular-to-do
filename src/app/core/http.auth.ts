import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    public postUser(email: string, password: string): Observable<any> {
        const body = {
            email: email,
            password: password
        }
        return this.http.post("http://localhost:64701/api/auth/login", body);
    }

    // public getUser(email: string):  Observable<any> {
    //     return this.http.get(`https://localhost:44306/api/auth/login/${email}`);
    // }
} 