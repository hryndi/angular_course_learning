import { Component, Input, input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { CalcOutputComponent } from './calc-output/calc-output.component';
import { TAnnualData } from '../../types';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InputFormComponent, CalcOutputComponent],
})
export class AppComponent {
  passedAnnualData: TAnnualData[] = [];

  setOutput(newOutput: TAnnualData[]) {
    this.passedAnnualData = newOutput;
  }
}
