import React, { useState } from "react";

const users = [
  { id: 1, name: "nam" },
  { id: 2, name: "an" },
  { id: 3, name: "long" },
];

export default function InputWithUseState() {
  const [valueText, setValueText] = useState("");
  const [userId, setUserId] = useState(1);
  console.log(valueText, userId);
  const handleClick = () => {
    setValueText("son dep trai");
  };
  const handleChangeRadio = (e) => {
    setUserId(Number(e.target.id));
  };

  return (
    <div>
      <input
        type="text"
        value={valueText}
        onChange={(e) => setValueText(e.target.value)}
      />
      {users.map((user) => (
        <div key={user.id}>
          <input value={user.name} id = {user.id} type="radio" onChange={handleChangeRadio} checked={user.id === userId}/>
          {user.name}
        </div>
      ))}
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
