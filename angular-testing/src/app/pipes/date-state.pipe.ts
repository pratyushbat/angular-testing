import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateState',
})
export class DateStatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
