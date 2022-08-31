import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Read.css';
const Read = () => {
    const{id}= useParams();
    const [users, setUser] =useState([]);
    
    useEffect(()=>{
        fetch('/products')
        .then(res=>res.json())
        .then(res=>
      setUser(res) ) 
    },[])
    const newuser = users.filter((user)=>user.id==id)
    return (
<div>
      { users.length>0 &&  <div className="read">
            <h3>ID : {newuser[0].id}</h3>
            <h3>Name : {newuser[0].name}</h3>
           
           <Link to="/"><Button variant="primary">Back To Home</Button></Link> 
        </div>}
        </div>
    );
};

export default Read;