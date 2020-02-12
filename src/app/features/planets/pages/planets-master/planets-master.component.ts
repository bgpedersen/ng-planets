import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwapiService } from 'src/app/core/http/swapi.service';
import { Planet } from 'src/app/core/models/planet';

@Component({
  selector: 'app-planets-master',
  templateUrl: './planets-master.component.html',
  styleUrls: ['./planets-master.component.scss']
})
export class PlanetsMasterComponent implements OnInit {
  planets$: Observable<Planet[]>;
  planetsFake$: Observable<Planet[]>;

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.planets$ = this.swapiService.getPlanets().pipe(
      map(res => res.results),
      map(results => results.map(result => new Planet(result)))
    );

    this.planetsFake$ = this.swapiService.getFakePlanets().pipe(
      map(res => res.results),
      map(results => results.map(result => new Planet(result)))
    );
  }
}
