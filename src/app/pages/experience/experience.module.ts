import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { ExperienceListComponent } from '../../components/experience/experience-list/experience-list.component';
import { ExperienceDeleteComponent } from '../../components/experience/experience-delete/experience-delete.component';
import { ExperienceEditComponent } from '../../components/experience/experience-edit/experience-edit.component';
import { ExperienceDirective } from './experience.directive';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule
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
