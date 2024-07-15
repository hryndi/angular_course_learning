import { Component, Input, Output } from '@angular/core';
import { TAnnualData } from '../../../types';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-calc-output',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './calc-output.component.html',
})
export class CalcOutputComponent {
  @Input({ required: true }) annualData!: TAnnualData[];
}
