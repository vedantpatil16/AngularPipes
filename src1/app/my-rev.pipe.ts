import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown 
  {
    let str = value;
    let temp : string = "";
    let iCnt : number;

    for(iCnt = (str.length - 1); iCnt >= 0; iCnt--)
    {
      temp = temp + str[iCnt];
      console.log(temp);
    }
    return temp;
  }

}
