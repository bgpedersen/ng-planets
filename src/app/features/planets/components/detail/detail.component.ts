import { Component, Input, OnInit } from '@angular/core';
import { Planet } from 'src/app/core/models/planet';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() planet: Planet;

  constructor() {}

  ngOnInit(): void {}
}
