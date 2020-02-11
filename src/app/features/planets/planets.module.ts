import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { PlanetsDetailComponent } from './pages/planets-detail/planets-detail.component';
import { PlanetsMasterComponent } from './pages/planets-master/planets-master.component';
import { PlanetsRoutingModule } from './planets-routing.module';

@NgModule({
  declarations: [
    PlanetsMasterComponent,
    PlanetsDetailComponent,
    HeaderComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [CommonModule, PlanetsRoutingModule, RouterModule, SharedModule]
})
export class PlanetsModule {}
