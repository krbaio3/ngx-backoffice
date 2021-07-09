import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformObject',
})
export class TransformObjectPipe implements PipeTransform {
  transform(value: any) {
    if (!value) return;
    const keys = Object.keys(value);
    console.log(keys);
    return keys;
  }
}
