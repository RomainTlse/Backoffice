import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { ExperienceListComponent } from '../../components/experience/experience-list/experience-list.component';
import { ExperienceDeleteComponent } from '../../components/experience/experience-delete/experience-delete.component';
import { ExperienceEditComponent } from '../../components/experience/experience-edit/experience-edit.component';
import { ExperienceDirective } from './experience.directive';
import {CdkTableModule} from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule,
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
    ExperienceComponent
  ],
  declarations: [
    ExperienceComponent,
    ExperienceListComponent,
    ExperienceDeleteComponent,
    ExperienceEditComponent,
    ExperienceDirective,
  ],
  entryComponents: [
    ExperienceListComponent,
    ExperienceDeleteComponent,
    ExperienceEditComponent,
  ],
})
export class ExperienceModule { }
