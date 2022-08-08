import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });
  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private auth: AuthserviceService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    sessionStorage.getItem('token') && this.route.navigateByUrl('');
  }

  isLoading=false

  login() {
    this.isLoading=true
      this.auth.login(this.loginForm.value).subscribe((res:any) =>{
        if(res.token){
          sessionStorage.setItem('token',res.token)
          this.route.navigateByUrl('');
        }  
      },()=>{
        this.snackBar.open('Invalid username or password','Close',{duration:2000,verticalPosition:'top'})
        this.isLoading=false
      })
   
    
  }
}
