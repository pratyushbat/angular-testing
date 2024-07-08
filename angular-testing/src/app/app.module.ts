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
import {
  FileInput,
  FileinputComponent,
} from './pages/fileinput/fileinput.component';
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
import { AppcComponent } from './pages/appc/appc.component';
import { TreeNodeComponent } from './pages/tree-node/tree-node.component';
import { PostComponent } from './pages/post/post.component';
import { PhotoCardComponent } from './pages/photo-card/photo-card.component';
import { PostCardComponent } from './pages/post-card/post-card.component';
import { ListComponent } from './pages/list/list.component';
import { ItemComponent } from './pages/item/item.component';
import {
  ColorDirective,
  ListTypeDirective,
} from './directives/item-directives';
import { AppListOneComponent } from './pages/app-list-one/app-list-one.component';
import { ImgPreviewDirective } from './directives/imgpr.directive';
import { NgcuserComponent } from './pages/ngcuser/ngcuser.component';
import { AgePipe, PhonePipe, SafeEmailPipe, TwitterPipe } from './pipes';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { DateStatePipe } from './pipes/date-state.pipe';
import { TimerPipe } from './pipes/timer.pipe';
import { UserPicturePipe } from './pipes/user-picture.pipe';
import { MemoizedfnPipe } from './pipes/memoizedfn.pipe';
import { ClockComponent } from './pages/clock/clock.component';
import { ClockasyncComponent } from './pages/clockasync/clockasync.component';
import { PostasyncComponent } from './pages/postasync/postasync.component';
import { FileInputDirective } from './directives/file-input.directive';
import { PostDirective } from './directives/post.directive';
import { AppdirecitiveComponent } from './pages/appdirecitive/appdirecitive.component';
import { ListtempComponent } from './pages/listtemp/listtemp.component';
import { CompdirDirective } from './directives/compdir.directive';
import { ListDirective } from './directives/list.directive';
import { ListBComponent } from './pages/list-b/list-b.component';
import { ListtwoDirective } from './directives/listtwo.directive';
import { FileinputdiroriginaloldDirective } from './directives/fileinputdiroriginalold.directive';
import { FileinputdirusingnameDirective } from './directives/fileinputdirusingname.directive';
import { Fileinputwithouthost82Directive } from './directives/fileinputwithouthost82.directive';
import { FileinputwithexportasDirective } from './directives/fileinputwithexportas.directive';
import { AppdirectivewithexportasComponent } from './pages/appdirectivewithexportas/appdirectivewithexportas.component';
import { TrimlengthDirective } from './directives/trimlength.directive';
import { UppercaseDirective } from './directives/uppercase.directive';
import { PaintDirective } from './directives/paint.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './pages/banner/banner.component';
import { SizeSwitcherDirective } from './directives/size-switcher.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterfuckounterComponent } from './pages/counterfuckounter/counterfuckounter.component';
import { RectFormsComponent } from './pages/rect-forms/rect-forms.component';
import { TddFormsComponent } from './pages/tdd-forms/tdd-forms.component';
import { AddressGroupComponent } from './pages/address-group/address-group.component';
import { ChangebgDirective } from './directives/changebg.directive';
import { CountryComponent } from './pages/country/country.component';
import { CountrySelectedComponent } from './pages/country-selected/country-selected.component';
import { CountryFlagComponent } from './pages/country-flag/country-flag.component';
import { BannercComponent } from './pages/bannerc/bannerc.component';
@NgModule({
  declarations: [
    FileInputDirective,
    SafeEmailPipe,
    TimerPipe,
    FilterPipe,
    SortPipe,
    AgePipe,
    PhonePipe,
    UserPicturePipe,
    TwitterPipe,
    ListTypeDirective,
    ColorDirective,
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
    GreetcComponent,
    AppcComponent,
    ImgPreviewDirective,
    TreeNodeComponent,
    PostComponent,
    PhotoCardComponent,
    PostCardComponent,
    ListComponent,
    ItemComponent,
    AppListOneComponent,
    NgcuserComponent,
    DateStatePipe,
    MemoizedfnPipe,
    ClockComponent,
    ClockasyncComponent,
    PostasyncComponent,
    PostDirective,
    AppdirecitiveComponent,
    ListtempComponent,
    CompdirDirective,
    ListDirective,
    ListBComponent,
    ListtwoDirective,
    FileinputdiroriginaloldDirective,
    FileinputdirusingnameDirective,
    Fileinputwithouthost82Directive,
    FileinputwithexportasDirective,
    AppdirectivewithexportasComponent,
    TrimlengthDirective,
    UppercaseDirective,
    PaintDirective,
    TooltipDirective,
    BannerComponent,
    SizeSwitcherDirective,
    CounterfuckounterComponent,
    RectFormsComponent,
    TddFormsComponent,
    AddressGroupComponent,
    ChangebgDirective,
    CountryComponent,
    CountrySelectedComponent,
    CountryFlagComponent,
    BannercComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule  ,BrowserAnimationsModule ,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
