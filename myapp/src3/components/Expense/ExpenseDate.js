import "./ExpenseDate.css" ;

function ExpenseDate(props) {
    const  date = props.dateSplit.getDate();
    const  month = props.dateSplit.getMonth();
    const  year = props.dateSplit.getFullYear(); 
    return (
      
        <div className="ExpenseItemDate">{date+"-"+month+"-"+year }</div>

    )
}

export default ExpenseDate ;