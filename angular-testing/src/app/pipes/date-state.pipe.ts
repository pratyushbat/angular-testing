import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateState',
})
export class DateStatePipe implements PipeTransform {
  transform(timeOrDate: any, ...args: unknown[]): unknown {
    return null;
  }
}
