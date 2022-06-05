import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../Api'
import './Posts.css';

const Posts = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers().then((res) => setUsers(res)).catch(err => console.log("something went wrong with fetching users :", err));
  },[])

  useEffect(() => {
    console.log("users : ", users);
  
  }, [users])
  
  return (
    <div className="users">{
      users?.map((item, index) => {
      return (<div className="user" key={index}>
        <h4 className="name">Name : {item.name}</h4> 
        <h6 className="text">Email : {item.email}</h6>
        <h6 className="text">Website : {item.website}</h6>
      </div>)
    })  
    }</div>
  )
}

export default Posts