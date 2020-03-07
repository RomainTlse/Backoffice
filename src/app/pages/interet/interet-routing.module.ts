import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InteretComponent} from './interet.component';


const routes: Routes = [
  { path: 'interet', component: InteretComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteretRoutingModule { }
