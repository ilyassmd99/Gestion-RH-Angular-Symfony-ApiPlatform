import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AAddComponent } from './a-add/a-add.component';
import { ADeleteComponent } from './a-delete/a-delete.component';
import { AEditComponent } from './a-edit/a-edit.component';
import { AIndexComponent } from './a-index/a-index.component';

const routes: Routes = [
  {path: '', component: AIndexComponent},
  {path: 'edit/:id', component: AEditComponent},
  {path: 'add', component: AAddComponent},
  {path: 'delete/:id', component: ADeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbsenceCongeRoutingModule { }
