import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeanComponent } from './mean/mean.component';
import { VedioComponent } from './vedio/vedio.component';
import { StudentComponent } from './student/student.component';
import { NotesComponent } from './notes/notes.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'mean',component:MeanComponent},
  {path:'vedio',component:VedioComponent},
  {path:'student',component:StudentComponent},
  {path:'notes',component:NotesComponent},
  {path:'pdf',component:PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
