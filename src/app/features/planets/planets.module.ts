import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlanetsDetailComponent } from './pages/planets-detail/planets-detail.component';
import { PlanetsMasterComponent } from './pages/planets-master/planets-master.component';
import { PlanetsRoutingModule } from './planets-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [PlanetsMasterComponent, PlanetsDetailComponent, HeaderComponent, ListComponent, DetailComponent],
  imports: [CommonModule, PlanetsRoutingModule, RouterModule]
})
export class PlanetsModule {}
