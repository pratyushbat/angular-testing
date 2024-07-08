import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './pages/clock/clock.component';
import { ClockasyncComponent } from './pages/clockasync/clockasync.component';
import { AppdirecitiveComponent } from './pages/appdirecitive/appdirecitive.component';
import { AuthGuard } from './utility/app.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: 'clock', component: ClockComponent },
  { path: 'async-clock', component: ClockasyncComponent,canActivate: [AuthGuard] },
  { path: 'app-dir', component: AppdirecitiveComponent ,canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
