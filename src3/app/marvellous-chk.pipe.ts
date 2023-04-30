import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown 
  {
    if(args[0] == "Even")
    {
      let no = value;
      if(no%2 == 0)
      {
        return "It is even number"
      }
      else
      {
        return "Not Even"
      }
    }
    
    if(args[0]=="Odd")
    {
      let no = value;
      if(no%2 != 0)
      {
        return "It is odd number"
      }
      else
      {
        return "It is not odd"
      }
    }

    if(args[0]=="Prime")
    {
      let i : number = 0;
      let no = value;
      let cond = Math.round(no/2);

      for(i=2; i <= cond; i++)
      {
        if(no%i == 0)
        {
          break
        }
      }

      if(i == (cond+1))
      {
        return "It is a Prime Number"
      }
      else
      {
        return "It is not Prime"
      }
    }

    if(args[0] == "Perfect")
    {
      let no = value;
      let iSum : number = 1;
      let i : number = 0;
      for(i=2; i <= Math.round(no/2); i++)
      {
        if((no % i) == 0)
        {
          iSum = iSum + i
        }
      }
      if(iSum == no)
      {
        return "It is a Perfect Number"
      }
      else
      {
        return "It is not Perfect"
      }
    }
    return null;
  }

}
