import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { DateFormat } from "../constants";

@Pipe({
  name: 'defaultDate',
  standalone: true
})
export class DefaultDatePipe implements PipeTransform {
  transform(value: Date | string | number): string {
    return formatDate(value, DateFormat, 'en-US');
  }
}
