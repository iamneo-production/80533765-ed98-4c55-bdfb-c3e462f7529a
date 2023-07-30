import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = "https://8080-faacbacbeaaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/admin/login";

  private isLoggedIn: boolean = false;
  private userEmail: string | null = null;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean, email?: string) {
    this.isLoggedIn = value;
    this.userEmail = email || null;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  getUserEmail() {
    return this.userEmail;
  }

  login(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, loginData);
  }
  logout(): Observable<any> {
    return this.http.post<any>(`https://8080-faacbacbeaaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/user/logout`, { Email: this.getUserEmail() });
  }
}