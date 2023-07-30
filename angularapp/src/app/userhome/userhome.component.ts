import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  userEmail: string | null = null;
  userMobileNumber: string | null = null;
  userName:string | null=null;

  constructor(private loginService: LoginService, private http: HttpClient) { }

  ngOnInit(): void {
    this.userEmail = this.loginService.getUserEmail();
    this.fetchUserMobileNumber();

  }

  fetchUserMobileNumber() {
    this.http.get<any>(`https://8080-faacbacbeaaaaddcbdfdabdadcfacebfffcdcbfec.project.examly.io/api/user/${this.userEmail}`).subscribe({
      next: (res) => {
        if (res?.user?.mobileNumber) {
          console.log(res);
          this.userMobileNumber = res.user.mobileNumber;
          this.userName=res.user.username;
        }
      },
      error: (err) => {
        console.error('Error fetching user details:', err);
      }
    });
  }
}
