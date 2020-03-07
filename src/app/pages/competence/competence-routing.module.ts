import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompetenceComponent} from './competence.component';


const routes: Routes = [
  { path: 'competence', component: CompetenceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenceRoutingModule { }
