import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm= this.formBuilder.group({
    username:'',
    password:''
  })
  constructor(private route: Router,private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    sessionStorage.getItem('token')&&this.route.navigateByUrl('')
  }

  login() {
    sessionStorage.setItem('token','token')
    this.route.navigateByUrl('');
  }
}
