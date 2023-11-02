import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SinginComponent } from './pages/autentication/singin/singin.component';
import { RegisterComponent } from './pages/autentication/register/register.component';
import { VerificationCodeComponent } from './pages/autentication/verification-code/verification-code.component';

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    RegisterComponent,
    VerificationCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
