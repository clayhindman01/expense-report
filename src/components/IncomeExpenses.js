import React, { useContext } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { GlobalContext } from "../context/GlobalState"

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

  return (
      <>
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-${expense}</p>
        </div>
    </div>
    <PieChart 
        data={[
            {value: income > 0? parseFloat(income - expense): 100, color: "#35fc03"},
            {value: expense > 0? parseFloat(expense): null, color: "#fc3503"}
        ]}
        animate={true}
        lineWidth={25}
        paddingAngle={1}
        radius={30}
    />
    </>
  );
};
