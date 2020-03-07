import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteretRoutingModule } from './interet-routing.module';
import { InteretComponent } from './interet.component';
import { InteretListComponent } from '../../components/interet/interet-list/interet-list.component';
import { InteretDeleteComponent } from '../../components/interet/interet-delete/interet-delete.component';
import { InteretEditComponent } from '../../components/interet/interet-edit/interet-edit.component';
import { InteretDirective } from './interet.directive';


@NgModule({
  imports: [
    CommonModule,
    InteretRoutingModule
  ],
  exports: [
    InteretComponent
  ],
  declarations: [
    InteretComponent,
    InteretListComponent,
    InteretDeleteComponent,
    InteretEditComponent,
    InteretDirective,
  ],
  entryComponents: [
    InteretListComponent,
    InteretDeleteComponent,
    InteretEditComponent,
  ],
})
export class InteretModule { }
