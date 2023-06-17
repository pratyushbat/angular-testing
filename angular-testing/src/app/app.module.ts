import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { OperationsComponent } from './pages/operations/operations.component';
import { UsercComponent } from './pages/userc/userc.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DepartmentgsComponent } from './pages/departmentgs/departmentgs.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OperationsComponent,
    UsercComponent,
    DepartmentComponent,
    DepartmentgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
