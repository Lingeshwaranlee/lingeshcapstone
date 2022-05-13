import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

const UsersData = [
  {
    userName: "LINGESH",
    position: "Round 1",
    office: "21-02-2020",
    age: 3.22,
    startDate: "https://www.loom.com/share/f3bbffbe1a",
    salary: "Learn more basics",
  },
  {
    userName: "LINGESH",
    position: "Round 2",
    office: "18-03-2020",
    age: 4.52,
    startDate: "https://www.loom.com/share/f3bbffbe1a",
    salary: "Work on your coding skills",
  },
  {
    userName: "LINGESH",
    position: "Round 3",
    office: "21-04-2020",
    age: 2.37,
    startDate:"https://www.loom.com/share/f3bbffbe1a",
    salary: "need more improvement",
  },
  
];

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(UsersData);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};