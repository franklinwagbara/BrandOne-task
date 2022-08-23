import { useState, useEffect } from "react";
import axios from "axios";

const UserList = ({ currentStaff }) => {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://89ff6852-9e47-4f98-8f48-d0f254b6d4df.mock.pstmn.io/staff-list"
      )
      .then((res) => setUserList(res.data))
      .catch((error) => {
        console.log(
          "bad staff list get response error: ",
          JSON.parse(JSON.stringify(error.response.data))
        );
        let data = JSON.stringify(error.response.data);

        let index = data.toString().indexOf("ruth@gmail.com") + 14;

        data = data.slice(0, index) + '\\"' + data.slice(index);

        index = data.indexOf(",,");

        data = data.slice(0, index) + data.slice(index + 1);

        setUserList(JSON.parse(JSON.parse(data)));
      });
  }, []);

  console.log("usersss : ", userList);

  return (
    <div>
      <h1>Welcome {currentStaff.firtName + ", " + currentStaff.lastName} </h1>
      <ul>
        {userList
          ? userList.map((user) => (
              <li key={user.StaffID}>
                StafID: {user.StaffID}, Email: {user.Staff} , WorkStatus:{" "}
                {user.WorkStatus}, RoleName: {user.RoleName}, JobOnDesk:{" "}
                {user.JobOnDesk}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default UserList;
