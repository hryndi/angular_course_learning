import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TAnnualData } from '../../../types';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-form.component.html',
})
export class InputFormComponent {
  @Output() annualDataEvent = new EventEmitter<TAnnualData[]>();
  initialInvestment: number | null = null;
  annualInvestment: number | null = null;
  expectedReturn: number | null = null;
  duration: number | null = null;

  annualData: TAnnualData[] = [];

  calculate() {
    if (
      this.initialInvestment === null ||
      this.annualInvestment === null ||
      this.expectedReturn === null ||
      this.duration === null
    ) {
      console.error('All input fields should be filled!');
      return;
    }
    this.annualData = [];
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (this.expectedReturn / 1000000);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          this.initialInvestment + this.annualInvestment * year,
        id: Math.floor(Math.random() * 100).toString(),
      });
    }
    console.log(this.annualData);

    return this.annualDataEvent.emit(this.annualData);
  }
}
