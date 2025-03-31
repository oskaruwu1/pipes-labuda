import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfSentences',
  standalone: false
})
export class NumberOfSentencesPipe implements PipeTransform {
  instances!: number;

  transform(value: string, ...args: string[]): any {
    if (args) {
      this.instances = (value.match(new RegExp(args[0], "g")) || []).length;
    
      return this.instances; 
    }else{
      return value;
    }
  }
}
