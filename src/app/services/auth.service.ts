import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export interface User {
  pseudo: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState = new BehaviorSubject<null | User>(null);

  constructor() {
    this.getAuthState$().subscribe(console.log);
  }

  getAuthState$() {
    return this.authState.asObservable();
  }

  signOut() {
    this.authState.next(null);
  }

  loginAs(user: User) {
    this.authState.next(user);
  }
}
