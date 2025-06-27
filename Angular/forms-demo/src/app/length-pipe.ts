import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class LengthPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var str:string=<string>value;
    return str.length;
  }

}
