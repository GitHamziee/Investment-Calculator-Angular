import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InvestmentFormComponent } from '../investment-form/investment-form.component';
import { InvestmentResultsComponent } from '../investment-results/investment-results.component';
import { type invDType } from './investment.model';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    InvestmentFormComponent,
    InvestmentResultsComponent,
  ],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  @Input() displayResult!: boolean;
  @Input() investmentData!: invDType;

  InvValues(data: invDType) {
    this.investmentData = data;
    console.log(data);
  }

  displayResults(value: boolean) {
    this.displayResult = value;
  }
}
