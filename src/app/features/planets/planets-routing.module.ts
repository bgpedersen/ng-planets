import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetsDetailComponent } from './pages/planets-detail/planets-detail.component';
import { PlanetsMasterComponent } from './pages/planets-master/planets-master.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsMasterComponent,
    children: [{ path: ':id', component: PlanetsDetailComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule {}
