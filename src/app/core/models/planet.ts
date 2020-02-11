export class Planet {
  name: string;
  // tslint:disable-next-line: variable-name
  rotation_period: string;
  // tslint:disable-next-line: variable-name
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  // tslint:disable-next-line: variable-name
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;

  constructor(data?) {
    if (data) {
      Object.assign(this, data);
    }
  }

  get id() {
    // RegEx replace all except numbers with empty
    const theId = +this.url.replace(/\D/g, '');
    return theId;
  }
}
