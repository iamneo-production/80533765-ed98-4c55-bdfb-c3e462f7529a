import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private auth: SharedService, private router: Router,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/)]],
    });
  }
  

  onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: (res) => {
          alert(res.message);
          this.loginForm.reset();
          if (res.message === 'Admin login success!') {
            this.loginService.setLoggedIn(true);
            this.router.navigate(['admin-home']);
          } else if (res.message === 'User login success!') {
            this.loginService.setLoggedIn(true);
            this.router.navigate(['user-home']);
          } 
        },
        error: (err) => {
          alert(err?.error.message);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
  }
  } 
}


