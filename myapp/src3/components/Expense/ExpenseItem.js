import "./ExpenseItem.css" ;
import React , {useState} from "react";
import ExpenseDate from "./ExpenseDate.js" ;
import Cards from "../UI/Cards";

function ExpenseItem(props) {
    // const  date = props.date.getDate();
    // const  month = props.date.getMonth();
    // const  year = props.date.getFullYear();
//     let  title = props.desc ;  
    const[ title , setTitle] =useState(props.desc) ;

     const ClickFunction =()=>{
      //   title = "New title.....";
      //   console.log(title);            // Value wont change
           setTitle("New Title.......") ;
     }
    return (
       <Cards className="ExpenseItem_container" >
           {/* <div className="ExpenseItemDate">March 12th 2023</div>
           <div className="ExpenseItemDetails">  Car Insurance</div>
           <div className="ExpenseItemPrice">$200</div> */} 

           {/* <div className="ExpenseItemDate">{date+"-"+month+"-"+year }</div> */}
           <ExpenseDate dateSplit={props.date} />
           <div className="ExpenseItemDetails">{title}</div>
            <div className="pack">
           <div className="ExpenseItemPrice">{props.price}</div>
           <button onClick={ClickFunction}>Click Here</button>
           </div>

       </Cards> 
   
    ) ;
}

export default ExpenseItem ;