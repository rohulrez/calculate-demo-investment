type InvestmentData = {
initialAmount: number, 
annualContrib: number, 
expectedReturn: number,
duration: number
}

type InvestmentResult = {
    year: string,
    totalAmount: number,
    totalContributions: number,
    totalIntrestEarned: number
}

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment (data: InvestmentData): CalculationResult{
    const {initialAmount, annualContrib, expectedReturn, duration} = data;

    if (initialAmount < 0) {
        return 'Initial investment amount must  not be zero.'
    }
    if (duration <= 0) {
        return 'No valid amount of years provided!'
    }
    if (expectedReturn < 0) {
        return 'Expected return must be at least zero.'
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalIntrestEarned = 0;

    const annualResult: InvestmentResult[] =[];

    for (let i =0; i< duration; i++) {
        total = total * (1 + expectedReturn);
        totalIntrestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContrib;
        total = total + annualContrib;

        annualResult.push({
            year : `Year ${i + 1}`,
            totalAmount: total,
            totalIntrestEarned,
            totalContributions,  
        })
    }
    return annualResult;
}



function printResults(da) {

}

const results = calculateInvestment(...)


printResults(results);