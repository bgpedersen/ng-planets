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

  constructor(private swapiService: SwapiService) {
    this.planets$ = this.swapiService
      .getPlanets()
      .pipe(map(res => res.results));
  }

  ngOnInit(): void {}
}
