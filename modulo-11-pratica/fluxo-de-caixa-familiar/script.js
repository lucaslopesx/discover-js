let familyFlux = {
    incomes: [3000, 800, 500.5, 830.5],
    expenses: [1500, 120.5, 200, 1000, 100, 150, 50],
};

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value;
    }

    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(familyFlux.incomes);
    const calculateExpenses = sum(familyFlux.expenses);

    const total = calculateIncomes - calculateExpenses;
    const itsOK = total >= 0;

    let balanceText = "negativo: -";

    if (itsOK) {
        balanceText = "positivo: +";
    }
    console.log(`Seu saldo é ${balanceText}R$${total.toFixed(2)}`);
}

calculateBalance();
