import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationComponent } from './formation.component';
import { FormationListComponent } from '../../components/formation/formation-list/formation-list.component';
import { FormationDeleteComponent } from '../../components/formation/formation-delete/formation-delete.component';
import { FormationEditComponent } from '../../components/formation/formation-edit/formation-edit.component';
import { FormationDirective } from './formation.directive';

@NgModule({
  imports: [
    CommonModule,
    FormationRoutingModule
  ],
  exports: [
    FormationComponent
  ],
  declarations: [
    FormationComponent,
    FormationListComponent,
    FormationDeleteComponent,
    FormationEditComponent,
    FormationDirective,
  ],
  entryComponents: [
    FormationListComponent,
    FormationDeleteComponent,
    FormationEditComponent,
  ],
})
export class FormationModule { }
