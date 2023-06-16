import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { OperationsComponent } from './pages/operations/operations.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }