import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorAppointmentsPageComponent } from '@/pages/doctor/appointments/appointments.component';
import { DoctorAppointmentPageComponent } from '@/pages/doctor/appointment/appointment.component';
import { PatientAppointmentsPageComponent } from '@/pages/patient/appointments/appointments.component';
import { PatientAppointmentPageComponent } from '@/pages/patient/appointment/appointment.component';
import { PatientSchedulePageComponent } from '@/pages/patient/schedule/schedule.component';
import { PatientDoctorsPageComponent } from '@/pages/patient/doctors/doctors.component';

const routes: Routes = [
  {
    path: 'doctor/appointments',
    component: DoctorAppointmentsPageComponent
  },
  {
    path: 'doctor/appointment/:id',
    component: DoctorAppointmentPageComponent
  },
  {
    path: 'patient/appointments',
    component: PatientAppointmentsPageComponent
  },
  {
    path: 'patient/appointment/:id',
    component: PatientAppointmentPageComponent
  },
  {
    path: 'patient/schedule',
    component: PatientSchedulePageComponent
  },
  {
    path: 'patient/doctors',
    component: PatientDoctorsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
