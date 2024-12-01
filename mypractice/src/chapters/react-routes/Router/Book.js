import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Book = () => {
 const {id}  =  useParams() ;
 const obj = useOutletContext() ;
  return (
    <h3>Book {id} {obj.hello}</h3>
  )
}

export default Book