import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'webColor'
})
export class WebColorPipe implements PipeTransform {
  private colorMap = {
    'grønn': 'lime',
    'rød': 'red',
    'hvit': 'white',
    'blå': 'steelblue',
    'gul': 'yellow',
    'lilla': 'purple',
    'svart': 'black'
  };

  transform(value: string, args?: any): string {
    let color = this.colorMap[value.toLowerCase()];
    
    return color ? color : 'black';
  }
}
