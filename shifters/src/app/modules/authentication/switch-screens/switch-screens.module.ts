import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SwitchScreensComponent } from "./switch-screens.component";
import { SwitchScreensRoutingModule } from "./switch-screens.routing";
import { RegisterComponent } from "../register/register.component";
import { SinginComponent } from "../singin/singin.component";

@NgModule({
  imports: [
    SwitchScreensRoutingModule, 
    CommonModule, 
    FormsModule,
    RegisterComponent,
    SinginComponent,
    ReactiveFormsModule,
    CommonModule
],
  declarations: [SwitchScreensComponent]
})
export class SwitchScreensModule {}