import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientAppointmentsComponent } from './appointments/appointments.component';
import { PatientAppointmentComponent } from './appointment/appointment.component';
import { PatientDoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [
  {
    path: '',
    component: PatientAppointmentsComponent
  },
  {
    path: 'appointment/:id',
    component: PatientAppointmentComponent
  },
  {
    path: 'doctors',
    component: PatientDoctorsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
