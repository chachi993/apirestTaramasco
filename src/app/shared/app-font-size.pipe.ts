import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFontSize'
})
export class AppFontSizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
