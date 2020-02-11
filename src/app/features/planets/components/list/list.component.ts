import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/core/models/planet';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() planets$: Observable<Planet[]>;

  constructor() {}

  ngOnInit(): void {}
}
