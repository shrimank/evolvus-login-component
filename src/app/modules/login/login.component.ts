import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Credentials }  from '../../models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLogin = new EventEmitter<Credentials>();
  @Input() title: string;
  @Input() application: string;
  @Input() authType: string;
  loginForm: FormGroup;
  credentials: Credentials;

  constructor() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(null, Validators.required),
      'userPassword': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    console.log('This title',this.title);
    console.log('This application',this.application);
    console.log('This authType',this.authType);
  }

  onSubmit() {
    console.log(this.loginForm.value.userName);
    this.credentials=new Credentials(this.loginForm.value.userName,
                                      this.loginForm.value.userPassword,
                                      this.application,
                                      this.authType);
    console.log("This credentials:",this.credentials);
    this.onLogin.emit(this.credentials);
  }

}
