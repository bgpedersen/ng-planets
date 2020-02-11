import { Planet } from './planet';

export class SwapiResult {
  count: number;
  next: string;
  previous: any;
  results: Planet[];
}
