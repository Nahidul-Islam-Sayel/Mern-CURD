import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Componant/Home/Home';
import {UserProvider } from './Componant/Context/Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Delete from './Componant/Delete/Delete';
import Read from './Componant/Read/Read';
import Create from './Componant/Create/Create';
import Edit from './Componant/Edit/Edit';

function App() {
 
  return (
    
    <UserProvider>
        <Router>
        <Switch>
        <Route path="/edit/:id">
          <Edit/>
         </Route>
        <Route path="/Create">
          <Create/>
         </Route>
        <Route path="/read/:id">
          <Read/>
         </Route>
         <Route path="/delete/:id">
          <Delete></Delete>
         </Route>
        <Route path="/">
          <Home></Home>
         </Route>
          </Switch>
        </Router>
      
    </UserProvider>
  );
}

export default App;
