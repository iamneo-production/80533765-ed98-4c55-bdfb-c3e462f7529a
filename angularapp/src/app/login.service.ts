import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = "https://8080-faacbacbeaaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/admin/login";

  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(status: boolean) {
    this.isLoggedIn = status;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  login(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, loginData);
  }

}

