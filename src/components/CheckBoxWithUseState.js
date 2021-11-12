// rfc + tab deer tạo nhanh function export
import React, { useState } from "react";

const users = [
  { id: 1, name: "nam" },
  { id: 2, name: "an" },
  { id: 3, name: "long" },
];

export default function CheckBoxWithUseState() {
  const [userIds, setUserId] = useState([]);
  console.log(userIds);
  const handleChange = (id) => {
    setUserId((arrId) => {
      const isChecked = userIds.includes(id);
      console.log(isChecked);
      console.log();
      if (isChecked) {
          return userIds.filter(userId => userId !== id);
      } else {
         return [...arrId, id];
      }
    });
  };
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <input
            type="checkbox"
            checked={userIds.includes(user.id)}
            onChange={() => handleChange(user.id)}
          />
          {user.name}
        </div>
      ))}
    </div>
  );
}
