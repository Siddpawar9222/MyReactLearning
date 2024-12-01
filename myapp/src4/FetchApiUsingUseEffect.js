import { useState, useEffect } from "react";

const FetchApiUsingUseEffect = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://fakestoreapi.com/products/${state}`);
      const promises = await get.json();
      setData([...data, promises]); //Note it it gave me problem
   
      // console.log(promises);
      console.log(data);
      document.title = `${state} Product availble`;
    }
    getData();
    
  }, [state]);

  return (
    <div>
      <button onClick={() => setState(state + 1)}> Click Me {state} </button>
      {Array.isArray(data) &&
        data.map((Element, index) => {
          return (
            <div key={index}>
              <h1>id : {Element.id}</h1>
              <h1>title : {Element.title}</h1>
              <h1>price : {Element.price}</h1>
              <h1>description : {Element.description}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default FetchApiUsingUseEffect;
