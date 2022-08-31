import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
const Delete = () => {

    const{id}= useParams();
    const [users, setUser] =useState([]);
      useEffect(()=>{
        fetch('/products')
        .then(res=>res.json())
        .then(res=>
      setUser(res) ) 
    },[])

    const newuser = users.filter((user)=>user.id===id)
    const deleteitem=()=>{
      fetch(`/delete/${newuser[0]._id}`,{
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(res=>{
      
      }
       )
    }
    
    return (
        <div>
         <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Are Your Sure You Wan't To Delete Users?</Modal.Title>
  </Modal.Header>

  

  <Modal.Footer>
      <Link to="/">
      <Button variant="secondary" onClick={()=>deleteitem()}>Delete</Button>
    <Button variant="primary">Cencle</Button>
      </Link>
  
  </Modal.Footer>
</Modal.Dialog>
        </div>
    );
};

export default Delete;