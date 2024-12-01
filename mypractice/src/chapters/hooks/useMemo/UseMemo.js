import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const expenseCalculation = (num) => {
    console.log('Calculating......');
    for (let i = 0; i < 1000000000; i++) {}
    console.log('Done Calculation...');
    return num;
  };

  const calculation = useMemo(() => {
    return expenseCalculation(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <h1>{count}</h1>

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>Name: {name}</h1>
      <h2>Result: {calculation}</h2>
    </div>
  );
};

export default UseMemo;

/*
useMemo used to optimize the performance of functional components by memoizing the result of expensive calculations. 
-It is primarily useful when you have a computationally intensive function or logic that is called frequently, and you want to avoid unnecessary recalculations.


Dependencies work : 
 - const calculation = useMemo(() => {
    return expenseCalculation(count);
  }, [] );   expenseCalculation(count) will not work for count as well as name

 - const calculation = useMemo(() => {
    return expenseCalculation(count);
  }, [count] );   expenseCalculation(count) will  work for count 
*/