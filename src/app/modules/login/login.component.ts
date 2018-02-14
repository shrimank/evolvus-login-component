import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLogin = new EventEmitter<{username,password}>();
  @Input() title: string;
  loginForm: FormGroup;


  constructor() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    this.onLogin.emit({username:this.loginForm.value.username,password:this.loginForm.value.password});
  }

}
