import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/reducers/ProductReducer'
import { asyncGetProducts } from '../store/actions/ProductActions';
const Product = () => {
  const dispatch = useDispatch();
  const {product}=  useSelector((state)=>state.ProductReducer) ;
   useEffect(()=>{
      dispatch(asyncGetProducts());
   },[])

  return (
    <div>
       <div className="user-list-container">
      <h1 className="user-list-header">Product List</h1>
      <div className="user-list">
        {product.map((product,index) => (
          <div className="user-card" key={product.id}>
            <p className="user-name">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Product
