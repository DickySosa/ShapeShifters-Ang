import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterRoutingModule } from "./register.routing";
import { RegisterComponent } from "./register.component";

@NgModule({
    imports: [RegisterRoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [RegisterComponent]
})
export class BasalMetabolicRateModule {}