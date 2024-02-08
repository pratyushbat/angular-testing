import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memoizedfn',
})
export class MemoizedfnPipe implements PipeTransform {
  // transform(fn: Function, ...args: unknown[]) {
  //   return fn(...args);
  // }
  // for impure function use below

  transform(fn: Function, thisArg: any, ...args: unknown[]) {
    return fn.call(thisArg, ...args);
  }
}
