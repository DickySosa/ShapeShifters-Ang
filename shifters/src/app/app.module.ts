import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SinginComponent } from './modules/authentication/singin/singin.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { SwitchScreensComponent } from './modules/authentication/switch-screens/switch-screens.component';
import { VerificationCodeComponent } from './modules/authentication/verification-code/verification-code.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    RegisterComponent,
    VerificationCodeComponent,
    SwitchScreensComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
