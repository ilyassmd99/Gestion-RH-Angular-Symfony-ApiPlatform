import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PIndexComponent } from './p-index/p-index.component';
import { PEditComponent } from './p-edit/p-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PIndexComponent,
    PEditComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
