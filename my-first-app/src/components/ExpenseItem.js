import "./ExpenseItem.css";

function ExpensItem() {
  const expenseDate = new Date(2023, 2, 14);
  const expenseTitle = "Valentines Day";
  const expenseAmount = 2000;
  return (
    <div className="expense-item">
      <div>
        <h1>{expenseDate.toISOString()}</h1>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpensItem;
