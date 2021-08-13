import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformObject',
})
export class TransformObjectPipe implements PipeTransform {
  transform(value: any) {
    if (!value) return;
    if (typeof value !== 'object') return;
    const keys = Object.keys(value);
    return keys;
  }
}
