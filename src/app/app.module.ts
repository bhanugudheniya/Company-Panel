import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeanComponent } from './mean/mean.component';
import { VedioComponent } from './vedio/vedio.component';
import { StudentComponent } from './student/student.component';
import { NotesComponent } from './notes/notes.component';
import { PdfComponent } from './pdf/pdf.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    MeanComponent,
    VedioComponent,
    StudentComponent,
    NotesComponent,
    PdfComponent,
    CompanyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
