import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './pages/clock/clock.component';
import { ClockasyncComponent } from './pages/clockasync/clockasync.component';

const routes: Routes = [
  { path: 'clock', component: ClockComponent },
  { path: 'async-clock', component: ClockasyncComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
