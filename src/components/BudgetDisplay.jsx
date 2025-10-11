function BudgetDisplay({dailybudget, expenseList, monthlybudget, clear}) {
  return (
    <>

    <div id="budget-info">
       <p>Daily Budget: Rs {dailybudget}</p>
    </div>
      <div className="w-full flex justify-center">
        <ul>
         {
            expenseList.map(expense =>(
                <li key={expense.id}>{expense.Expense}:{expense.cost}</li>
            ))
         }
        </ul>
      </div>
      <button 
        onClick={clear}
        className="px-4 py-3 mt-4 bg-emerald-400 text-white rounded-2xl hover:bg-emerald-500">
        Reset
      </button>
    </>
  );
}

export default BudgetDisplay;
