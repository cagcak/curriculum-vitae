import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence',
})
export class SentenceCasePipe implements PipeTransform {
  transform(value: any): string {
    return (value || '')
      .replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase())
      .trim();
  }
}
