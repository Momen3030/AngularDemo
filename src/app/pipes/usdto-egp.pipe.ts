import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdtoEgp'
})
export class UsdtoEgpPipe implements PipeTransform {

  transform(value: number, exRate: number = 15.5): string {
    return value * exRate + ' EGP';
  }

}
