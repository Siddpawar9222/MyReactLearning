import "./ExpenseMain.css" ;
import ExpenseItem from "./ExpenseItem.js";
import Cards from "../UI/Cards";

function ExpenseMain(props) {
    return(
        <Cards className="main_container">
      {
      /* <ExpenseItem
        date={ExpenseItemDate}
        desc ={ExpenseItemDetails}
        price={ExpenseItemPrice}
       /> */
       }

      <ExpenseItem
        date={props.expenseSplit[0].date}
        desc={props.expenseSplit[0].desc}
        price={props.expenseSplit[0].price}
      />
      <ExpenseItem
        date={props.expenseSplit[1].date}
        desc={props.expenseSplit[1].desc}
        price={props.expenseSplit[1].price}
      />
      <ExpenseItem
        date={props.expenseSplit[2].date}
        desc={props.expenseSplit[2].desc}
        price={props.expenseSplit[2].price}
      />
      <ExpenseItem
        date={props.expenseSplit[3].date}
        desc={props.expenseSplit[3].desc}
        price={props.expenseSplit[3].price}
      />
    </Cards>
    ) ;
}

export default ExpenseMain ;