import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value)
      .subscribe(login => console.log(login));
  }

}
