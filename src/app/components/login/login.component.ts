import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={username:'cps',password:'demo'};
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(login: NgForm) {
    // console.log(login.value);
    this.auth.login(login.value).subscribe(data=>{
      this.router.navigate(['main']);
      // console.log(data['token']);
      this.auth.user=true;
      localStorage.setItem('token',data['token']);
    },error=>{
      console.log(error);
    });
  }
}
