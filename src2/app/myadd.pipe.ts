import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
    let No1 = value;
    let iAns = No1 + args[0];

    return iAns;
  }

}
