import React, { memo } from "react";

const ReactMemo = ({ onCounter }) => {
  console.log("render components React.memo!");
  return (
    <>
      <h1>Đỗ Công Sơn</h1>
      <button onClick={onCounter}>Counter</button>
    </>
  );
};

export default memo(ReactMemo);
// khi không sử dụng React.memo() thì khi component ReactMemo sẽ bị re-render
// lại khi component cha re-render cho dù component ReactMemo không hề thay đổI gì gây hao tốn performance.
// khi sử dụng React.memo() thì chỉ khi có thay đổi ở component thì component này mới re-render
