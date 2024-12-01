import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseMain.module.css" ;
const ExpenseMain = (props) => {
  return (
    <>
      <h1 style ={{textAlign :"center", color : "purple"}}>{props.data1}</h1>
      {props.data.map((element) => ( 
        <div className={styles.ExpenseItem_container} key={element.id}>
          <p><ExpenseDate date={element.date}/></p>
          <p className={styles.ExpenseItemDetails}> {element.desc}</p>
          <p className={styles.ExpenseItemPrice}>{element.price}</p>
        </div>
      ))}
    </>
  );
};

export default ExpenseMain;
