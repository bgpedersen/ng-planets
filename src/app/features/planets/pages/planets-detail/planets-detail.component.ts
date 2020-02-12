import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwapiService } from 'src/app/core/http/swapi.service';
import { Planet } from 'src/app/core/models/planet';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.scss']
})
export class PlanetsDetailComponent implements OnInit {
  planet$: Observable<Planet>;

  // planetPlaceholder$ = of({
  //   name: 'Yavin IV',
  //   rotation_period: '24',
  //   orbital_period: '4818',
  //   diameter: '10200',
  //   climate: 'temperate, tropical',
  //   gravity: '1 standard',
  //   terrain: 'jungle, rainforests',
  //   surface_water: '8',
  //   population: '1000',
  //   residents: [],
  //   films: ['https://swapi.co/api/films/1/'],
  //   created: '2014-12-10T11:37:19.144000Z',
  //   edited: '2014-12-20T20:58:18.421000Z',
  //   url: 'https://swapi.co/api/planets/3/'
  // }).pipe(map(res => new Planet(res)));

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    console.log(id);

    this.planet$ = this.swapiService
      .getPlanet(id)
      .pipe(map(res => new Planet(res)));
  }
}
