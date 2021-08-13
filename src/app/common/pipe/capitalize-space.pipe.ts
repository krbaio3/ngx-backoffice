import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeSpace',
})
export class CapitalizeSpacePipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value === 'number') return '';
    if (typeof value === 'object') return '';

    const result = (value as string).replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}
