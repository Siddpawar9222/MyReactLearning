import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(url);
      const promises = await get.json();
      console.log(promises);
      setData(...data ,[promises]);
    }
    getData();
  }, []);
  return [data];
};

export default UseFetch;
