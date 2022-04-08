import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

class credentials {
  username!: string
  password!: string
  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm!: NgForm
  credentials!: credentials

  constructor() {
    this.credentials = new credentials("jack", "123")
  }

  ngOnInit(): void {
    // this.loginForm.setValue(this.credentials)
    console.log("Form: ",this.loginForm);
    setTimeout(() => {
      console.log("Time out Form: ",this.loginForm.form.value);
      this.loginForm.setValue(this.credentials)
    }, 0);
    
  }
  login(login: NgForm): void {
    console.log("login called");
    console.log(this.credentials);
  }

}
