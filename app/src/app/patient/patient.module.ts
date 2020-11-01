import { NgModule } from '@angular/core';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatToolbarModule, PatientRoutingModule],
  declarations: [PatientComponent],
})
export class PatientModule { }
