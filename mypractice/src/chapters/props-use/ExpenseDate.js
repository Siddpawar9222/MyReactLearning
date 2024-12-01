import styles from "./ExpenseDate.module.css" ;

function ExpenseDate(props) {
    const  date = props.date.getDate();
    const  month = props.date.getMonth();
    const  year = props.date.getFullYear(); 
    return (
      
        <span className={styles.expenseitemdate}>{date+"-"+month+"-"+year }</span>

    )
}

export default ExpenseDate ;