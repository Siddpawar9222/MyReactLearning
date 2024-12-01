import "./Cards.css" ;

function Cards(props) { 
    let classes = "card " + props.className ;    // We can Access css of Container(ExpenseItem_container class) Space is important
    return(
       // <div className="card">{props.children}</div>  
        <div className={classes}>{props.children}</div>   // We can now access the content of Container(see ExpenseItem --->   
        // <ExpenseDate dateSplit={props.date} />
        // <div className="ExpenseItemDetails">{props.desc}</div>
        // <div className="ExpenseItemPrice">{props.price}</div>)
    );
    
}

export default Cards ;


//Only using Cards in place of other tags not Sufficient , It will replace all child content and it will also replace attributes of parent tag