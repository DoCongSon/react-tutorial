# React-Tutorial

---

## Copyright® by DoCongSon

- ✔*Facebook :* [Đỗ Công Sơn](https://www.facebook.com/docongson2001)
- ✔*Github :* [DoCongSon](https://github.com/DoCongSon)

---

# Hooks

- Hooks là những hàm cho phép bạn “kết nối” React state và lifecycle vào các components sử dụng hàm.

> react là một Single-page Application và để thực hiện việc này nó cần có đến các state - các trạng thái của các thẻ html, vậy khi chúng ta thực hiện một tác vụ làm thay đổi giao diện thì chúng ta đồng thời update lại state này, dựa vào state này mà react có thể biết được bạn đang làm cái gì và nó có thể thay đổi giao diện theo ý của bạn.

> lifeCycle thì đúng như tên gọi nó là một vòng đời của một component, từ khi các bạn truy cập hoặc thực hiện load trang, cho đến khi các bạn xuất kết quả về là thành công hoặc thất bại

- Với Hooks bạn có thể sử dụng state và lifecycles mà không cần dùng ES6 Class.

---

---

### userState() hook

- Được sử dụng khi muốn dữ liệu thay đổi thì giao diện người dùng tự động được cập nhật ( render lại theo dữ liệu)
- Cách dùng:

  ```jsx
  import { useState } from 'react'
  function Component() {
      const {state, setState} = useState(initState);

      ...
  }
  ```

- Lưu ý:

  - Component được render lại sau khi `setState`
  - innit state chỉ được sử dụng cho lần đầu
  - `setState` và `innitState` có thể là hàm callback
  - set State là thay thế state cũ bằng giá trị mới (không ghi đè)

  #### Data binding trong React

  - **Component:**
    Tất cả các thành phần trong 1 trang web đều được hiểu là _component_. Với sự trợ giúp của virtual DOM, các _component_ đều được khởi tạo dưới dạng _Javascript Object_ và được chuyển đổi thành HTML DOM mỗi khi được render.
  - **State và props:**
    Dữ liệu trong React tất cả đều được quy về 2 loại, đó là _state_ và _props_.
    - **State** là "trạng thái" của 1 component, nó có thể được khởi tạo bên trong component hoặc được truyền từ component cha. State có thể được thay đổi bên trong component.
    - **Props** là các "thuộc tính" của 1 component, được truyền từ component cha. Khác với state, props không thể bị thay đổi bởi component sử dụng nó.
  - **Luồng dữ liệu trong React:**

    - dữ liệu trong React sẽ chỉ được truyền theo 1 chiều duy nhất, đó là từ component cha đến component con thông qua props. Không có chiều ngược lại (thực ra là bạn có thể làm ngược lại nhưng như vậy là trái với quan điểm của React).
    - Câu hỏi đặt ra, liệu dữ liệu có thực sự được truyền theo 1 chiều duy nhất? Thường là không! Nhưng trong React, chúng ta coi việc truyền "thông tin" từ component con đến component cha là truyền "sự kiện". Trong sự kiện đó component con có thể đính kèm các thông tin của sự kiện (có thể là dữ liệu). Quá trình đó được hiểu là truyền sự kiện, không phải truyền dữ liệu.

    `Tóm lại, trong React, dữ liệu sẽ được truyền từ trên xuống, và sự kiện được truyền từ dưới lên.`

  #### Mounted & Unmounted?

  - Mounted là thời điểm đưa Component vào sử dụng trong DOM
  - Unmounted ngược lại với Mounted là thời điểm xoá bỏ Component khỏi DOM

---

### useEffect() hook

- **Effect Hook** cho phép thực hiện side effect bên trong các function component
- **useEffect** để quản lý vòng đời của của một component và nó phục vụ chúng ta sử dụng trong function component thay vì các lifecycle như trước đây trong class component.
- **useState** cho phép chúng ta sử dụng state trong functional components. **useEffect** cho phép chúng ta sử lý logic trong lifecycle methods. Từ cái tên useEffect chắc chúng ta cũng hiểu được hàm sẽ được gọi mỗi khi có gì đó ảnh hưởng đến components của bạn. Và thực sự nó giống với định nghĩa của _componentDidMount_ và _componentDidUpdate_.
- Cách dùng:

  `- function callback luôn được gọi sau khi Component được Mounted`

  `- cleanup function luôn được gọi trước khi Component được Unmounted`

  `- cleanup function là function được return từ callback function`

  ```jsx
  // 1: tham số truyền vào là hàm callback
  // - callback được gọi mỗi khi component được re-render
  // - callback được gọi sau khi component thêm element vào DOM
  useEffect(function callback);
  // 2: tham số truyền vào là hàm callback và mảng rỗng
  useEffect(function callback, []);
  // 3: tham số truyền vào là hàm callback và mảng chứa các dependency
  // - callback được gọi mỗi khi dependency thay đổi
  useEffect(function callback, [dependency]);
  // 4: cách dùng cleanup function
  useEffect(() => {
    ...

    // cleanup function
    return () => {
      ...
    }
  }, [dependency]);
  ```

- **cleanup function** thường được sử dụng để xoá DOM even trước khi Component được Unmounted

---

### useLayoutEffect hook

- Đa phần chúng ta dùng **useEffect** mình cũng vậy. Và 1 hôm đẹp trời mình nhận thấy khi dùng **useEffect** để set data ban đầu thay cho _componentDidMount_ trong _class component_ thì thấy hiện tượng nhấp nháy nhẹ khá khó chịu.
- Nếu bạn thấy hiện tượng giật, sử dụng để đo vị trí trong DOM (đo vị trí của element,...) hãy thử dùng **useLayoutEffect**. Nó cũng giống **useEffect** nhưng khác cách chạy. useLayoutEffect sẽ chạy trước khi cập nhật lại UI.

- bảng so sánh thứ tự làm việc giữa useEffect và useLayoutEffect
  | STT | useEffect | useLayoutEffect |
  | --- | ---------------------------------------------- | ---------------------------------------------- |
  | 1 | Cập nhật lại state | Cập nhật lại state |
  | 2 | Cập nhật lại DOM (mutated) | Cập nhật lại DOM (mutated) |
  | 3 | Render lại UI | Gọi cleanup function nếu dependencies thay đổi |
  | 4 | Gọi cleanup function nếu dependencies thay đổi | Gọi useLayoutEffect callback |
  | 5 | Gọi useEffect callback | Render lại UI |

- Nên dùng useEffect hay useLayoutEffect?

  - Phần lớn trường hợp, useEffect là lựa chọn đúng. Nếu code của bạn xảy ra trường hợp giật, thay sang useLayoutEffect sẽ giúp bạn giải quyết vấn đề này

  - Bởi vì useLayoutEffect là đồng bộ. app của bạn sẽ không cập nhật UI đến khi effect hoàn thành... Nó có thể là nguyên nhân xảy ra vấn đề về performance nếu bạn có những đoạn code xử lý chậm trong effect.

---

### useRef() hook

- **useRef Hook** là một hàm trả về một **Object ref** có thể thay đổi thuộc tính **current** được khởi tạo cho đối số được truyền vào (initialValue). Object được trả về sẽ tồn tại trong toàn bộ thời gian tồn tại của Component.
- cách dùng:
  ```jsx
  const refContainer = useRef(initialValue);
  // refContainer.current = initialValue
  ```
- Các trường hợp phổ biến khi cần phải truy cập tới các thành phần con trong DOM đó là làm việc với input:

  ```jsx
  function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
  ```

  Về cơ bản, useRef giống như một "box", dùng để lưu các giá trị của một element sử dụng thuộc tính `.current`. Bạn có thể quen thuộc với ref chủ yếu như một cách để truy cập DOM. Nếu bạn chuyển một đối tượng ref cho React với `<div ref = {myRef} />`, React sẽ đặt thuộc tính `.current` của nó tới node DOM tương ứng bất cứ khi nào node đó thay đổi.

- **Function Component** là component không có khả năng render function. Mọi thứ được định nghĩa trong phần thân của hàm là hàm kết xuất trả về JSX cuối cùng. Điều này có nghĩa là bất cứ khi nào có thay đổi về state thì tất cả các đoạn code trong function component sẽ được thực thi. Điều này chỉ ra rằng nếu chúng ta có một biến đối tượng bên trong function component thì với mỗi render, điều này sẽ được khởi tạo với giá trị mặc định. Chúng ta hãy chứng minh điều này. Chúng ta có một biến đếm tổng mỗi lần component đc render. Đầu tiên chúng tôi sẽ viết một cái gì đó như dưới đây :

  ```jsx
  import React, { useState } from "react";
  const child = {
    padding: "25px",
    margin: "25px",
    border: "2px solid blue",
  };

  const Child = (prop) => {
    console.log("fuction called....");
    let counter = 0;
    let [myState, setMyState] = useState("A");

    let updateState = () => {
      counter++;
      setMyState(myState + "-u-");
      console.log("counter: " + counter);
    };

    return (
      <div style={child}>
        <div>
          <div>MyState : {myState}</div>
          <input
            type="button"
            onClick={() => updateState()}
            value="Update State"
          ></input>
        </div>
      </div>
    );
  };

  export default Child;
  ```

  Nhưng, Ở đây chúng ta thấy một vấn đề mà mọi giá trị đếm stateChange là 1 và lý do rất đơn giản mỗi lần render thì biến counter sẽ được gán lại.

  Yêu cầu ở đây là Nó sẽ được tăng lên với mỗi khi thay đổi trạng thái. Bây giờ chúng ta hãy sửa đổi biến thể hiện này được tạo bằng **useRef**. Với **ref**, một **object** được trả về và tồn tại trong suốt vòng đời của component

  ```jsx
  import React, { useState, useRef } from "react";
  const child = {
    padding: "25px",
    margin: "25px",
    border: "2px solid blue",
  };

  const Child = (prop) => {
    console.log("fuction called....");
    let counter = useRef(0);
    let [myState, setMyState] = useState("A");

    let updateState = () => {
      // bây giờ chúng ta có thể cập nhật lại current property của Referenced object như dưới đây.
      counter.current++;
      setMyState(myState + "-u-");
      console.log("counter: " + counter.current);
    };

    return (
      <div style={child}>
        <div>
          <div>MyState : {myState}</div>
          <input
            type="button"
            onClick={() => updateState()}
            value="Update State"
          ></input>
        </div>
      </div>
    );
  };

  export default Child;
  ```

  bậy giờ sau khi component được re-render thì counter không bị dặt lại giá trị và chúng ta thu được kết quả mong muốn
