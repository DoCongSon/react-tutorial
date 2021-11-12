import React, { useState } from "react";

export default function UserState() {
  const [user, setUser] = useState(() => {
    return {
      name: "sơn",
      age: 20,
    };
  });
  return (
    <div>
      <h1>user: {JSON.stringify(user)}</h1>
      <button
        onClick={() =>
          setUser((prev) => {
            return {
              ...prev,
              language: "vietnamese",
              address: "Hà Nội",
            };
          })
        }
      >
        thêm thông tin
      </button>
    </div>
  );
}
