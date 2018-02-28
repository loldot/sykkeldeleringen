import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/shared.module';

@Component({
  selector: 'sdr-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  public currentUser;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUsername();
  }
  signOut(){
    this.authService.signOut();
    this.currentUser = null;
  }
}
