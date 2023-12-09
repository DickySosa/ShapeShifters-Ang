import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SwitchScreensComponent } from "./switch-screens.component";
const routes: Routes = [
  {
    path: "",
    component: SwitchScreensComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchScreensRoutingModule {}