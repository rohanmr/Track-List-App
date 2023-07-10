import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "game",
      amount: 10,
      category: "utilities",
    },
    {
      id: 2,
      description: "asss",
      amount: 100,
      category: "utities",
    },
    {
      id: 3,
      description: "ggg",
      amount: 1000,
      category: "uities",
    },
    {
      id: 4,
      description: "sss",
      amount: 10000,
      category: "ities",
    },
  ]);
  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => console.log(category)} />
      </div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
