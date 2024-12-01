import "./User.css";
import {useDispatch, useSelector} from "react-redux"
import React from 'react'
import { deleteUser } from "../store/reducers/UserReducer";
  
const User = () => {
   const {users}= useSelector((state)=>state.UserReducer) ;
   const dispatch = useDispatch() ;
   
  const  handleDelete =(index)=>{
      dispatch(deleteUser(index));
  }
  return (
    <>
  <div className="user-list-container">
      <h1 className="user-list-header">User List</h1>
      <div className="user-list">
        {users.map((user,index) => (
          <div className="user-card" key={user.id}>
            <p className="user-name">{user.name}</p>
            <p className="user-email">{user.email}</p>
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default User ;


