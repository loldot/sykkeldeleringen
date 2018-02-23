import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/shared.module';

@Component({
  selector: 'sdr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string;
  public password:string;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  signIn(e : Event){
    e.preventDefault();

    this.authService.signIn(this.username, this.password);
  }

}
