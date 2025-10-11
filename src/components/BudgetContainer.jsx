import BudgetInput from "./BudgetInput"
import BudgetDisplay from "./BudgetDisplay"

function BudgetContainer({
  monthlybudget,
  setMonthlyBudget,
  setDailyBudget,
  dailybudget,
  Expense,
  setExpense,
  cost,
  setCost,
  expenseList,
  setExpenseList,
  addExpense,
  clear
}) {
  return (
    <div className="w-full mx-5 rounded-2xl shadow-2xl p-6 flex-col items-center sm:w-2/3 md:w-2/4 lg:w-2/5">
        <BudgetInput 
          monthlybudget={monthlybudget} 
          setMonthlyBudget={setMonthlyBudget} 
          dailybudget={dailybudget} 
          setDailyBudget={setDailyBudget}
          Expense={Expense}
          setExpense={setExpense}
          cost={cost}
          setCost={setCost}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          addExpense={addExpense}
        />
        <BudgetDisplay 
          monthlybudget={monthlybudget}
          dailybudget={dailybudget}
          expenseList={expenseList}
          clear={clear}
        />
    </div>
  )
}

export default BudgetContainer
