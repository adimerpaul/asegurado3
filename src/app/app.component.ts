import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'asegurado3';
  constructor(
    public auth: AuthService,
    private router: Router) {
  }

  mas() {
    // console.log('mas');
    this.auth.num =  this.auth.num +1;
  }

  menos() {
    // console.log('menos');
    this.auth.num = this.auth.num-1;
  }

  verdadero() {
    this.auth.user = true;
  }

  falso() {
    this.auth.user = false;
  }

  logout() {
    this.auth.user = false;
    this.router.navigate(['login']);
    localStorage.removeItem('token');
  }
}
