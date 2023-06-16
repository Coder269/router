import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterModule} from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './developer/skill/skill.component';



@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MenuComponent,
    SignUpComponent,
    DeveloperComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    RouterTestingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
