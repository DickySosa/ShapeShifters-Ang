import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SinginComponent } from './pages/autentication/singin/singin.component';
import { RegisterComponent } from './pages/autentication/register/register.component';
import { VerificationCodeComponent } from './pages/autentication/verification-code/verification-code.component';
import { SwitchScreensComponent } from './pages/autentication/switch-screens/switch-screens.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    RegisterComponent,
    VerificationCodeComponent,
    SwitchScreensComponent
  ],
  imports: [
    BrowserModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
