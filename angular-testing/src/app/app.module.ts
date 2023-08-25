import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, FileDIDirective, FileDirective } from './app.component';
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
import { MarvelComponent } from './pages/marvel/marvel.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TabComponent } from './pages/tab/tab.component';
import { AccordianComponent } from './pages/accordian/accordian.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { CourseComponent } from './pages/course/course.component';
import { HelloComponent } from './hello/hello.component';
import { GreetComponent } from './greet/greet.component';
import { GreetcComponent } from './greetc/greetc.component';
import { HttpClientModule } from '@angular/common/http';
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
    PhotoComponent,
    MarvelComponent,
    MovieComponent,
    TabComponent,
    AccordianComponent,
    FileDirective,
    FileDIDirective,
    TutorialComponent,
    CourseComponent,
    HelloComponent,
    GreetComponent,
    GreetcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
