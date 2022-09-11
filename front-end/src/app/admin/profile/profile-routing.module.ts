import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PEditComponent } from './p-edit/p-edit.component';
import { PIndexComponent } from './p-index/p-index.component';

const routes: Routes = [

  {path: '', component: PIndexComponent},
  {path: 'edit/:id', component: PEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
