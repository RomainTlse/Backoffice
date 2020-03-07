import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { CompetenceModule } from './pages/competence/competence.module';
import { ExperienceModule } from './pages/experience/experience.module';
import { FormationModule } from './pages/formation/formation.module';
import { InteretModule } from './pages/interet/interet.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CompetenceModule,
    ExperienceModule,
    FormationModule,
    InteretModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
