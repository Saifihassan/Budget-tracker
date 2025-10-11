function BudgetInput({
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
  addExpense
}) {
  return (
    <>
      <div className="flex gap-3">
        <input
          type="number"
          value={monthlybudget}
          onChange={(e) => {
            setMonthlyBudget(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (monthlybudget === "") {
                alert("enter a monthly budget first");
                return;
              }
              setDailyBudget(Math.floor(monthlybudget / 30));
            }
          }}
          placeholder="Enter your monthly budget.."
          className="w-10/12 px-3 py-2 border rounded-2xl"
        />
        <button
          className="bg-emerald-500 text-white px-4 py-4 rounded-full flex items-center justify-center w-12 h-12"
          onClick={() => {
            if (monthlybudget === "") {
              alert("enter a monthly budget first");
              return;
            }
            setDailyBudget(Math.floor(monthlybudget / 30));
          }}
        >
          +
        </button>
      </div>

      <div id="add-expenses" className="flex items-center gap-1 mt-2.5 mb-2.5">
        <input
          type="text"
          placeholder="Enter Expense.."
          value={Expense}
          onChange={(e)=>{setExpense(e.target.value)}}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              document.getElementById("cost-input").focus();
            }
          }}
          className=" border rounded-2xl w-1/2 sm:w-2/3 mt-2 px-3 py-2"
        />
        <input
          id="cost-input"
          type="number"
          placeholder="Enter Cost"
          value={cost}
          onChange={(e)=>{
            setCost(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (cost > dailybudget) {
                alert("not enough budget");
                return;
              }
              addExpense();
            }
          }}
          className="w-1/3 border rounded-2xl mt-2 px-3 py-2"
        />
        <button 
          onClick={() => {
            if (cost > dailybudget) {
              alert("not enough budget");
              return;
            }
            addExpense();
          }}
          className="bg-emerald-500 text-white px-4 py-4 w-12 mt-1 h-12 flex justify-center items-center rounded-full"
        >
          +
        </button>
      </div>
    </>
  );
}

export default BudgetInput;
