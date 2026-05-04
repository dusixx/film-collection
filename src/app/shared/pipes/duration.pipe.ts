import { Pipe, PipeTransform } from '@angular/core';
import { minutesToDuration } from '../utils';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(mins: number): string {
    return minutesToDuration(mins);
  }
}
