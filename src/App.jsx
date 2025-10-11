import { useEffect, useState } from "react"
import BudgetContainer from "./components/BudgetContainer"


function App() {
  const [monthlybudget , setMonthlyBudget] = useState('')
  const [dailybudget, setDailyBudget] = useState(()=>{
    if(JSON.parse(localStorage.getItem("dailyallowance"))){
      return JSON.parse(localStorage.getItem("dailyallowance"))

    }
    else{
      return 0
    }
  })
  const [Expense, setExpense] = useState('')
  const [cost, setCost] = useState(0)
  const [expenseList , setExpenseList] = useState(()=>{
    if(JSON.parse(localStorage.getItem("Transactions"))){
      return JSON.parse(localStorage.getItem("Transactions"))
    }
    else{
      return []
    }
  })

useEffect(()=>{
  localStorage.setItem("dailyallowance",JSON.stringify(dailybudget))
},[dailybudget])
  useEffect(()=>{
    localStorage.setItem("Transactions",JSON.stringify(expenseList))
  },[expenseList])

  function addExpense(){
    if(Expense===""){
      alert("Enter an expense")
      return
    }

    let obj = {
      id : Date.now(),
      Expense: Expense,
      cost : cost,
    }
    setExpenseList([...expenseList, obj])
    setDailyBudget(dailybudget-cost)
    setExpense('')
    setCost('')
  }

  function clear() {
    localStorage.removeItem("Transactions")
    localStorage.removeItem("dailyallowance")
    setDailyBudget(0)
    setExpenseList([])
    setMonthlyBudget('')
  }

   return (
   <>
      <div id="canvas" className="w-full h-screen flex items-center justify-center  bg-gradient-to-br from bg-green-100 via-white to-green 200">
        <BudgetContainer 
          monthlybudget={monthlybudget} 
          setMonthlyBudget={setMonthlyBudget} 
          setDailyBudget={setDailyBudget} 
          dailybudget={dailybudget}
          Expense={Expense}
          setExpense={setExpense}
          cost={cost}
          setCost={setCost}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          addExpense={addExpense}
          clear={clear}
        />
      </div>
   </>
  )
}

export default App