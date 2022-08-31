import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Create = () => {
 const[newUser, setNewUser]=useState({
  id:"",
  name:""
})
const handleChange=(e)=>{
  const{name,value}=e.target;
  setNewUser({
      ...newUser,
      [name]: value,
  })
  console.log(name,value)
 }
 const userSubmit=(e)=>{
  e.preventDefault();
  const{id,name}=newUser;
 
  if(id&&name){
    
   axios.post('/add',newUser )
  .then(res=>alert('added succefully'))
  }
  else  alert('Please enter valid input')
 
}

  return (
    
    <div className="create">
      <Form  action="" method="post">
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={newUser.id}
            onChange={handleChange}
            placeholder="Enter ID"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </Form.Group>
       
        <Button  variant="primary" type="submit" onClick={userSubmit}>
          Create User
        </Button>
        <Link to="/">
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;