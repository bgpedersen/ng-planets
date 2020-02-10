import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlanetsDetailComponent } from './pages/planets-detail/planets-detail.component';
import { PlanetsMasterComponent } from './pages/planets-master/planets-master.component';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  declarations: [PlanetsMasterComponent, PlanetsDetailComponent],
  imports: [CommonModule, PlanetsRoutingModule, RouterModule]
})
export class PlanetsModule {}
