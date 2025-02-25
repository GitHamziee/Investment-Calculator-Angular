export interface invDType {
  II: number;
  AI: number;
  ER: number;
  D: number;
}

// Add to your investment.model.ts
export interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
