import ExpenseItem from "./components/Expenseitem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 12).toISOString(),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12).toISOString(),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28).toISOString(),
    },
  ];
  return (
    <div>
      <h2>Lets get started!</h2>
      <p>This is also visible</p>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
        />
      ))}
    </div>
  );
}

export default App;
