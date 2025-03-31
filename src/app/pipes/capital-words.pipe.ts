import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalWords',
  standalone: false
})
export class CapitalWordsPipe implements PipeTransform {
  occurencies!: number[];

  transform(value: string): any {
    return ;
  }

}
