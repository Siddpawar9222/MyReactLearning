import { useState, useEffect } from "react";

import {Link } from "react-router-dom" ;
const Home = () => {
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
    
  }, [state ]);

  return (
    <div>
      <button onClick={() => setState(state + 1)}> Click Me {state} </button>
      {Array.isArray(data) &&
        data.map((Element, index) => {
          return (
           <Link to={`/${Element.id}` }> <div key={index + `${Element.title}`}>
              <h1>Title : {Element.title}</h1>
            </div></Link>
          );
        })}
    </div>
  );
};

export default Home;
