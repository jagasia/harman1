import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';

@Pipe({
  name: 'message',
  pure:false
})
export class MessagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    var prd:Product=<Product>value;
    // var str:string=prd.name+' costs '+prd.price;
    var str=`${prd.name} costs ${prd.price}`;
    return str;
  }

}
