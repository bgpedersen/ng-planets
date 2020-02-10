import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsMasterComponent } from './planets-master.component';

describe('PlanetsMasterComponent', () => {
  let component: PlanetsMasterComponent;
  let fixture: ComponentFixture<PlanetsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
