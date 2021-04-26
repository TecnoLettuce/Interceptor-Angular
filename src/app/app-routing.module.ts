import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

// configuración de las rutas
const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
