import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DIndexComponent } from './d-index/d-index.component';
import { DAddComponent } from './d-add/d-add.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    DIndexComponent,
    DAddComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,
    FormsModule
  ]
})
export class DocumentModule { }
