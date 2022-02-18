import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  // isAuthenticated: boolean = false;
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    // if (this.auth.currentUserValue) {
    //   this.isAuthenticated = true;
    //   this.router.navigate(['admin/dashboard']);
    // } else {
    //   this.isAuthenticated = false;
    // }
    // console.log(this.isAuthenticated);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
