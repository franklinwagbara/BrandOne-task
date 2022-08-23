import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import UserList from "./components/UserList";

const App = () => {
  const [currentStaff, setCurrentStaff] = useState(null);
  const [userList, setUserList] = useState([]);

  const handleCurrentUser = (currentUser) => {
    console.log("current staff: ", currentUser);
    setCurrentStaff(currentUser);
  };
  return (
    <div className="">
      <LoginPage currentUser={handleCurrentUser} />
      {currentStaff && <UserList currentStaff={currentStaff} />}
    </div>
  );
};

export default App;
