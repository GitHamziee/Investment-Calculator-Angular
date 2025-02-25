import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type invDType } from '../app/investment.model';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css'],
})
export class InvestmentFormComponent {
  initialInvestment = 0; // Corrected typo
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;
  @Output() userInvData = new EventEmitter<invDType>();
  @Output() showResult = new EventEmitter<boolean>();

  sendResults() {
    if (
      this.initialInvestment > 0 &&
      this.annualInvestment > 0 &&
      this.expectedReturn > 0 &&
      this.duration > 0
    ) {
      console.log(this.initialInvestment); // Corrected typo
      this.userInvData.emit({
        II: this.initialInvestment,
        AI: this.annualInvestment,
        ER: this.expectedReturn,
        D: this.duration,
      });
      this.showResult.emit(true);
    } else {
      alert('please enter each value first');
    }
  }
}
