import { useState, useEffect } from "react";

import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  const [data, setData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const price = searchParams.get("price");
  const category = searchParams.get("category");
  const Reset = () => {};

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://fakestoreapi.com/products/${userId}`);
      const promises = await get.json();
      setData(promises);
    }
    getData();
  }, [userId]);

  if (!Object.keys(data).length) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <img src={data.image} style={{ height: "40rem", width: "30rem" }} />
      <h3>Id : {data.id}</h3>
      <h3>Price : {data.price}</h3>
      <h3>Title : {data.title}</h3>
      <h3>Description :{data.description}</h3>
      <h3>Category : {data.category}</h3>
      <h3>Rating</h3>
      <h3>&nbsp; Rate : {data.rating.rate}</h3>
      <h3>&nbsp; Count : {data.rating.count}</h3>
      <br />
      <span>This is searchParam</span>
      <br />

      {price && <p>Price:  {price}</p>}
      {category && <p>Category: {category}</p>}
      <button onClick={()=>setSearchParams({price: data.price , category :data.category})}>Reset</button>
    </>
  );
};

export default UserDetails;
