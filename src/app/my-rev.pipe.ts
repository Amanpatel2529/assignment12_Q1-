import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform 
{

  transform(value: string): string
  {
    let temp : string = "suollevraM"
   
    return temp;
  }

}
