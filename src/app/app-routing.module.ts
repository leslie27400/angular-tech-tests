import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { IsLoggedInGuard } from "./guards/is-logged-in/is-logged-in.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: (): any => import("./pages/home/home.module").then(m => m.HomePageModule),
    canActivate: [IsLoggedInGuard],
  },
  {
    path: "login",
    loadChildren: (): any => import("./pages/login/login.module").then(m => m.LoginPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
