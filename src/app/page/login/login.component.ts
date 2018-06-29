import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'login-page';
  loginImage = 'https://angular.io/assets/images/logos/angular/angular.svg';
  inputText: string = '';
  goals = [];
  userResult() {
    console.log('hi');
    this.goals.push(this.inputText);
  }
  constructor() {
    this.userResult();
  }
}
