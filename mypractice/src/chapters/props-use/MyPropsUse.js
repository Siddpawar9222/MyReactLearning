import ExpenseMain from "./ExpenseMain";

const MyPropsUse = () => {

    const expense = [
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
      const mg = "This is Props Example" ;

  return (
    <>
        <ExpenseMain data ={expense} data1 ={mg}  />
    </>
  )
}

export default MyPropsUse ;

/*
-In React, props (short for "properties") are a mechanism for passing data from a parent component to its child component. Props are read-only and provide a way to communicate between components by sending data from one component (the parent) to another component (the child). 
-unidirctional   
          MyPropsUse
             \
              \(props)    
               \
                \
             ExpenseMain
                  \
                   \(props)    
                    \
                     \
                      ExpenseDate

                      
*/