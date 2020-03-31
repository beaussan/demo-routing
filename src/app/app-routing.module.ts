import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShellComponent} from "./shell/shell.component";


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(module => module.AboutModule),
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(module => module.LoginModule),
      },
      {
        path: '**',
        redirectTo: 'home',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
