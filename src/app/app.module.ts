import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursehomeComponent } from './coursehome/coursehome.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { OverviewComponent } from './overview/overview.component';
import { AcademicComponent } from './academic/academic.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursehomeComponent,
    SyllabusComponent,
    OverviewComponent,
    AcademicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
