import { Pipe, PipeTransform } from '@angular/core';
import { formatThousands } from '../utils';

@Pipe({
  name: 'formatThousands',
  standalone: true,
})
export class FormatThousandsPipe implements PipeTransform {
  transform(value: number): string {
    return formatThousands(value);
  }
}
