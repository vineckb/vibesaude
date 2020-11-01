import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent,
    loadChildren: () => import('./patient/patient.module').then(module => module.PatientModule)
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    loadChildren: () => import('./doctor/doctor.module').then(module => module.DoctorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
