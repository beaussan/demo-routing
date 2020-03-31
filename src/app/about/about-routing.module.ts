import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";
import {TotoComponent} from "./toto/toto.component";


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'toto',
    component: TotoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
