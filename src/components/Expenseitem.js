import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <div>{props.date.toLocaleString('default', { month: 'long' })}</div>
        <div>{props.date.getFullYear()}</div>
        <div>{props.date.getDate()}</div>
      </div>
      <div className="express-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
