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
import { FileInput, FileinputComponent } from './pages/fileinput/fileinput.component';
import { SliderComponent } from './pages/slider/slider.component';
import { PhotoPreviewComponent } from './pages/photo-preview/photo-preview.component';
import { PhotoListComponent } from './pages/multiplechildren/photo-list/photo-list.component';
import { PhotoComponent } from './pages/multiplechildren/photo/photo.component';

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
    FileinputComponent,
    FileInput,
    SliderComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
