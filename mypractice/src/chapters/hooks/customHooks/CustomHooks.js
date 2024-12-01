import UseFetch from "./UseFetch";

const CustomHooks = () => {
  const [data] = UseFetch(`https://fakestoreapi.com/products/10`);

  return (
    <div>
      {data.map((Element, index) => {
        return <h1 key={index}>{Element.category}</h1>;
      })}
    </div>
  );
};

export default CustomHooks;


/*
-Hooks are reusable functions.
-When you have component logic that needs to be used by multiple components, we  can extract that logic to a custom Hook.
-Custom Hooks start with "use". Example: useFetch.
-e.g. Suppose I have 4 components and out of 4 components in 3 component I need to write Same logic so I will make  one more component and I can use this component to rewrite the logic in 3 components .

*/
