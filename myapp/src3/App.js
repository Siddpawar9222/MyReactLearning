// import "./App.css" ;
import ExpenseMain from "./components/Expense/ExpenseMain.js";

function App() {
  //    let ExpenseItemDate = new Date (2023,2,27) ;
  //    let ExpenseItemDetails = "School Fee" ;
  //    let ExpenseItemPrice = 3000;     //This will repeat the code if more than one compount is there

  let expense = [
    {
      id: 1,
      date: new Date(2023,2,28),
      desc: "School fee",
      price: 2000,
    },
    {
      id: 2,
      date: new Date(2023,3,29),
      desc: "Hotel",
      price: 3000,
    },
    {
      id: 3,
      date: new Date(2023,4,12),
      desc: "Beech",
      price: 20000,
    },
    {
      id: 4,
      date: new Date(2023,1,5),
      desc: "GirlFriend",
      price: 2000,
    },
  ];

  return (
       <div>
        <ExpenseMain expenseSplit={expense}/>
       </div>
  );
}
export default App;
