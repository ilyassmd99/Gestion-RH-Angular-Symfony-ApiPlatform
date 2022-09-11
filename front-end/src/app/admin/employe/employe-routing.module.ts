import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EAddComponent } from './e-add/e-add.component';
import { EDeleteComponent } from './e-delete/e-delete.component';
import { EEditComponent } from './e-edit/e-edit.component';
import { EIndexComponent } from './e-index/e-index.component';

const routes: Routes = [

  {path: '', component: EIndexComponent},
  {path: 'edit/:id', component: EEditComponent},
  {path: 'add', component: EAddComponent},
  {path: 'delete/:id', component: EDeleteComponent},
  {path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
