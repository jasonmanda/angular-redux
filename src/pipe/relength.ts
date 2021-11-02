import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reLength' })
export class ReLengthPipe implements PipeTransform {
    transform(value: string, max: number = 20,caractereOverflow:string="."): string {
        if (value == null || value == undefined) return "";
        if(value.length<max)return value.substring(0, (max - 1));
        return value.substring(0, (max - 1))+caractereOverflow;
    }
}
