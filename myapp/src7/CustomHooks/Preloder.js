import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import {ToastContainer , toast} from "react-toastify" ;
import 'react-toastify/dist/ReactToastify.css';

export const Preloader = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true) ;
      const get = await fetch(`https://fakestoreapi.com/products/4`);
      const promises = await get.json();
      console.log(promises);
      setData([promises]);
      setLoading(false) ;
      toast.success("Seccessfully Fetched Data!")
    }
    getData();
  }, []);

  return ( 
    loading ? <TailSpin color="red" height={"40px"} width={"40px"}/ > :
    <div>
        <ToastContainer/>
      {data.map((Element, index) => {
        return <h1 key={index}>{Element.category}</h1>;
      })}

    </div>
  );
};

export default Preloader;
