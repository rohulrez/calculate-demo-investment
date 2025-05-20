"use strict";


function calculateInvestment(data) {
    const { initialAmount, annualContrib, expectedReturn, duration } = data;
    if (initialAmount < 0) {
        return 'Initial investment amount must  not be zero.';
    }
    if (duration <= 0) {
        return 'No valid amount of years provided!';
    }
    if (expectedReturn < 0) {
        return 'Expected return must be at least zero.';
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalIntrestEarned = 0;
    const annualResult = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalIntrestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContrib;
        total = total + annualContrib;
        annualResult.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalIntrestEarned,
            totalContributions,
        });
    }
    return annualResult;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total Interest Earned : ${yearEndResult.totalIntrestEarned.toFixed(0)}`);
        console.log('-------------------------');
    }
}
const investmentData = {
    initialAmount: 10000,
    annualContrib: 500,
    expectedReturn: 0.05,
    duration: 10
};
const results = calculateInvestment(investmentData);
printResults(results);
