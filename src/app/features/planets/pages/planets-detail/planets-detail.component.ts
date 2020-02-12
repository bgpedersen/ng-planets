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
  planetFake$: Observable<Planet>;

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

    this.planetFake$ = this.swapiService
      .getFakePlanet()
      .pipe(map(res => new Planet(res)));
  }
}
