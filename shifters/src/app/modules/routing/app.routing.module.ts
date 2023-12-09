import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },

   {
       path: "account-access",
        loadChildren: () => 
        import("../authentication/switch-screens/switch-screens.module")
        .then(m => m.SwitchScreensModule)
   }
];
//     {
//         path: "verification-code",
//         loadChildren: () =>
//             import("../authentication/switch-screens/switch-screens.module")
//             .then(m => m.VerificationCodeModule)
//     },
//     {
//         path: "basal-metabolic-rate",
//         loadChildren: () =>
//             import("../pages/calculators/basal-metabolic-rate/basal-metabolic-rate.module").then(m => m.BasalMetabolicRateModule)
//     },
//     {
//         path: "body-fat-percentage",
//         loadChildren: () =>
//             import("../pages/calculators/body-fat-percentage/body-fat-percentage.module").then(m => m.BodyFatPercentageModule)
//     },
//     {
//         path: "muscle-mass-index",
//         loadChildren: () =>
//             import("../pages/calculators/muscle-mass-index/muscle-mass-index.module").then(m => m.MuscleMassIndexModule)
//     },
// ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}