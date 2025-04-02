import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalWords',
  standalone: false
})
export class CapitalWordsPipe implements PipeTransform {
  words!: string[];
  result = new Array();

  transform(value: string): any {
    this.words = value.split(" ")
    this.words.forEach(element => {
      (element.charAt(0) == element.charAt(0).toUpperCase()) ? this.result.push(element) : null;
    });
    console.log(this.result)
    return this.result.join(" ");
  }

}
