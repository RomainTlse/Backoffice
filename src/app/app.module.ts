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
import { LoginModule } from './pages/login/login.module';
import { MessagesComponent } from './shared/messages/messages.component';
import {MessageService} from './services/message.service';
import {HttpErrorHandlerService} from './services/http-error-handler.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
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
    FontAwesomeModule,
    LoginModule,
  ],
  providers: [
    MessageService,
    HttpErrorHandlerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
