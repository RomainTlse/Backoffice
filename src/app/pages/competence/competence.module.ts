import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenceRoutingModule } from './competence-routing.module';
import { CompetenceComponent } from './competence.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CompetenceDirective } from './competence.directive';
import { CompetenceListComponent } from '../../components/competence/list/competence-list/competence-list.component';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import { CompetenceTechniqueEditComponent } from '../../components/competence/edit/competence-technique-edit/competence-technique-edit.component';
import { CompetenceFonctionnelleEditComponent } from '../../components/competence/edit/competence-fonctionnelle-edit/competence-fonctionnelle-edit.component';
import { CompetenceOutilOsEditComponent } from '../../components/competence/edit/competence-outil-os-edit/competence-outil-os-edit.component';
import { CompetenceTechniqueDeleteComponent } from '../../components/competence/delete/competence-technique-delete/competence-technique-delete.component';
import { CompetenceFonctionnelleDeleteComponent } from '../../components/competence/delete/competence-fonctionnelle-delete/competence-fonctionnelle-delete.component';
import { CompetenceOutilOsDeleteComponent } from '../../components/competence/delete/competence-outil-os-delete/competence-outil-os-delete.component';
import { CompetenceTechniqueListComponent } from '../../components/competence/list/competence-technique-list/competence-technique-list.component';
import { CompetenceFonctionnelleListComponent } from '../../components/competence/list/competence-fonctionnelle-list/competence-fonctionnelle-list.component';
import { CompetenceOutilOsListComponent } from '../../components/competence/list/competence-outil-os-list/competence-outil-os-list.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CompetenceRoutingModule,
    CdkTableModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    CdkStepperModule,
    MatStepperModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    CompetenceComponent
  ],
  declarations: [
    CompetenceComponent,
    CompetenceDirective,
    CompetenceListComponent,
    CompetenceTechniqueEditComponent,
    CompetenceFonctionnelleEditComponent,
    CompetenceOutilOsEditComponent,
    CompetenceTechniqueDeleteComponent,
    CompetenceFonctionnelleDeleteComponent,
    CompetenceOutilOsDeleteComponent,
    CompetenceTechniqueListComponent,
    CompetenceFonctionnelleListComponent,
    CompetenceOutilOsListComponent,
  ],
  entryComponents: [
    CompetenceListComponent,
    CompetenceTechniqueEditComponent,
    CompetenceFonctionnelleEditComponent,
    CompetenceOutilOsEditComponent,
    CompetenceTechniqueDeleteComponent,
    CompetenceFonctionnelleDeleteComponent,
    CompetenceOutilOsDeleteComponent,
  ],
})
export class CompetenceModule { }
