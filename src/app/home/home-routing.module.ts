import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home.component";
import {IsUserLoggedGuard} from "./is-user-logged.guard";
import {ItemComponent} from "./item/item.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [
        IsUserLoggedGuard,
    ],
    canActivateChild: [
        IsUserLoggedGuard,
    ],
    children: [
      {
        path: ':itemId',
        component: ItemComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
