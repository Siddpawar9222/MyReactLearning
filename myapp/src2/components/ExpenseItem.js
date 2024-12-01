import "./ExpenseItem.css" ;
import ExpenseDate from "./ExpenseDate.js" ;
import PropTypes from "prop-types";         //Note it : PropTypes as it is
//npm install prop-types
function ExpenseItem(props) {
    // const  date = props.date.getDate();
    // const  month = props.date.getMonth();
    // const  year = props.date.getFullYear();
    return (
       <div className="ExpenseItem_container" >
           {/* <div className="ExpenseItemDate">March 12th 2023</div>
           <div className="ExpenseItemDetails">  Car Insurance</div>
           <div className="ExpenseItemPrice">$200</div> */} 

           {/* <div className="ExpenseItemDate">{date+"-"+month+"-"+year }</div> */}
           <ExpenseDate dateSplit={props.date} />
           <div className="ExpenseItemDetails">{props.desc}</div>
           <div className="ExpenseItemPrice">{props.price}</div>
            
       </div> 
   
    ) ;
}

ExpenseItem.propTypes = {
    desc: PropTypes.string.isRequired,    //Value should be specific data type
    price: PropTypes.number.isRequired,
  };
  
  ExpenseItem.defaultProps = {
       desc:"Name"                        //Default value of desc if props not find
  }
export default ExpenseItem ;


