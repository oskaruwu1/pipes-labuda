import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo',
  standalone: false
})
export class LimitToPipe implements PipeTransform {

  transform(value: string | any[], limit: number = value.length, begin: number = 0): any {
    return value.slice(begin, limit+begin)
  }

}