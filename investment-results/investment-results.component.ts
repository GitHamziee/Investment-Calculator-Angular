import { Component, Input, OnInit } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common'; // Import DecimalPipe
import { invDType, InvestmentResult } from '../app/investment.model';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css'],
  standalone: true,
  imports: [DecimalPipe, NgFor], // Add DecimalPipe here
})
export class InvestmentResultsComponent implements OnInit {
  @Input() invData!: invDType;
  investmentResults: InvestmentResult[] = [];

  ngOnInit(): void {
    if (this.invData) {
      this.calculateInvestmentResults();
    }
  }

  calculateInvestmentResults(): void {
    if (!this.invData) return;

    this.investmentResults = [];
    let currentInvestmentValue = this.invData.II;
    let totalInterestEarned = 0;

    for (let i = 0; i < this.invData.D; i++) {
      const interestEarnedThisYear = parseFloat(
        (currentInvestmentValue * (this.invData.ER / 100)).toFixed(2)
      );
      totalInterestEarned = parseFloat(
        (totalInterestEarned + interestEarnedThisYear).toFixed(2)
      );
      currentInvestmentValue = parseFloat(
        (
          currentInvestmentValue +
          interestEarnedThisYear +
          this.invData.AI
        ).toFixed(2)
      );

      this.investmentResults.push({
        year: i + 1,
        interest: interestEarnedThisYear,
        valueEndOfYear: currentInvestmentValue,
        annualInvestment: this.invData.AI,
        totalInterest: totalInterestEarned,
        totalAmountInvested: this.invData.II + this.invData.AI * (i + 1),
      });
    }
  }
}
