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

  sortArray(list, prop) {
    return list.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  }

  ngOnInit(): void {
    this.planets$ = this.swapiService.getPlanets().pipe(
      map(res => res.results),
      map(results => results.map(result => new Planet(result))),
      map(results => this.sortArray(results, 'name'))
    );

    this.planetsFake$ = this.swapiService.getFakePlanets().pipe(
      map(res => res.results),
      map(results => results.map(result => new Planet(result))),
      map(results => this.sortArray(results, 'name'))
    );
  }
}
