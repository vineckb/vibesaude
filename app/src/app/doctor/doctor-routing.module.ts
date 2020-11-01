import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorAppointmentsComponent } from './appointments/appointments.component';
import { DoctorAppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorAppointmentsComponent
  },
  {
    path: 'appointment/:id',
    component: DoctorAppointmentComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
