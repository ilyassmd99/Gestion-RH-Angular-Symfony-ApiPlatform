import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DAddComponent } from './d-add/d-add.component';
import { DIndexComponent } from './d-index/d-index.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {path: '', component: DIndexComponent},
  {path: 'add', component: DAddComponent},
  {path: 'details/:id', component: DetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
