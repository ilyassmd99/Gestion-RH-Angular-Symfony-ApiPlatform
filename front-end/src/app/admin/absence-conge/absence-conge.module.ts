import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbsenceCongeRoutingModule } from './absence-conge-routing.module';
import { AIndexComponent } from './a-index/a-index.component';
import { AEditComponent } from './a-edit/a-edit.component';
import { AAddComponent } from './a-add/a-add.component';
import { ADeleteComponent } from './a-delete/a-delete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AIndexComponent,
    AEditComponent,
    AAddComponent,
    ADeleteComponent
  ],
  imports: [
    CommonModule,
    AbsenceCongeRoutingModule,
    FormsModule
  ]
})
export class AbsenceCongeModule { }
