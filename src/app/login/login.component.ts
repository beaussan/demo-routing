import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private readonly authService: AuthService,
      private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.authService.loginAs({
      pseudo: 'Nico',
    })
    this.router.navigate(['/', 'home'])
  }
}
