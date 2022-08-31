import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
    const [users, setUsers] = useState([
    { id: 1, name: "Sayel", position: "Front End Dev", salary: 28000 },
    { id: 2, name: "Nahidul", position: "Data Scientist", salary: 26000 },
    { id: 3, name: "Tayef", position: "Full Stack Dev", salary: 27000 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};