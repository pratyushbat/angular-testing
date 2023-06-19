import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { OperationsComponent } from './pages/operations/operations.component';
import { UsercComponent } from './pages/userc/userc.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DepartmentgsComponent } from './pages/departmentgs/departmentgs.component';
import { DepartmentgsdecComponent } from './pages/departmentgsdec/departmentgsdec.component';
import { UsercdecComponent } from './pages/usercdec/usercdec.component';
import { FileinputComponent } from './pages/fileinput/fileinput.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OperationsComponent,
    UsercComponent,
    DepartmentComponent,
    DepartmentgsComponent,
    DepartmentgsdecComponent,
    UsercdecComponent,
    FileinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
