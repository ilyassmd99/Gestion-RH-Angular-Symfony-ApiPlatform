import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EIndexComponent } from './e-index/e-index.component';
import { EEditComponent } from './e-edit/e-edit.component';
import { EAddComponent } from './e-add/e-add.component';
import { EDeleteComponent } from './e-delete/e-delete.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    EIndexComponent,
    EEditComponent,
    EAddComponent,
    EDeleteComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    FormsModule
  ]
})
export class EmployeModule { }
