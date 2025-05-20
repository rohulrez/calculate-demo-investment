type InvestmentData = {
initialAmount: number, 
annualContrib: number, 
expectedReturn: number,
duration: number
}

type InvestmentResult = {
    year: string,
    totalAmount: number,
    totalContribution: number,
    totalIntrestEarned: number
}

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment (data: InvestmentData): CalculationResult{

}



function printResults(da) {

}

const results = calculateInvestment(...)


printResults(results);