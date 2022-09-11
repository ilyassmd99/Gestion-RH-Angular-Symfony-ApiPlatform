import { compileNgModule } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceCongeModule } from './absence-conge/absence-conge.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children:[
      {path: '', redirectTo: 'employe', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {
        path: 'employe', loadChildren: () => import('./employe/employe.module')
          .then(m => m.EmployeModule)
      },
      {
        path: 'absence-conge', loadChildren: () => import('./absence-conge/absence-conge.module')
          .then(m => m.AbsenceCongeModule)
      },
      {
        path: 'profile', loadChildren: () => import('./profile/profile.module')
          .then(m => m.ProfileModule)
      },
      {
        path: 'document', loadChildren: () => import('./document/document.module')
          .then(m => m.DocumentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
