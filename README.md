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
    console.log("function called....");
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
    console.log("function called....");
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

#### React.memo() HOC

- **Class components** có thể **skip** việc **render** khi props được truyền vào là giống nhau bằng cách sử dụng **PureComponent** hoặc **shouldComponentUpdate**. Bây giờ bạn cũng có thể làm điều này tương tự với **function components** bằng cách gói chúng trong **React.memo.**
- **React.memo** là một **higher order component**. Nó tương tự như **React.PureComponent** nhưng dành cho **function components** thay vì là class.
- **cách dùng:**
  ```jsx
  const MyComponent = React.memo(function MyComponent(props) {
    /* Chỉ render khi props thay đổi */
  });
  ```
- Nếu function component của bạn render cùng một kết quả được cung cấp cùng một props. Bạn có thể gói nó trong React.memo để giúp tăng hiệu suất trong một số trường hợp bằng cách ghi nhớ kết quả. Điều này có nghĩa là React sẽ bỏ qua việc render component và sử dụng lại kết quả được render cuối cùng.

---

### useCallBack() hook

- câu lênh:
  ```jsx
  useCallback(callback function, dependencies);
  ```
- **useCallback** tập trung giải quyết vấn đề về performance, khi mà các `callback function` được tạo ở functional component cha pass xuống component con luôn bị tạo mới, khiến cho con luôn bị `re-render`.
- **useCallback** trả về một `function` (chính là function bạn pass vào ứng với tham số thứ nhất), `callback function` này sẽ được tạo lại khi một trong số các `dependencies` thay đổi. Nếu `dependencies` không đổi, function trả về sẽ là function trước đó -> tức là function pass xuống component con không bị tạo mới, tương đương không có object được tạo mới -> component con không bị `re-render`.
- Tóm lại **useCallback** giữ cho một hàm không được tạo lại lần nữa, dựa trên mảng các phần phụ thuộc. Nó sẽ trả về chính function đó. Sử dụng nó khi mà bạn muốn truyền function vào component con và chặn không cho một hàm nào đó tiêu thời gian, tài nguyên phải tạo lại.

---

### useMemo() hook

- **useMemo** cũng giống như khái niệm **React memo**, nhưng có sự khác biệt rõ ràng. Nếu như React memo sinh ra với mục địch tránh việc rerender nhiều lần thì _useMemo tránh cho việc tính toán lại một function lặp đi lặp lại nhiều lần mỗi lần component re-render_. Bản chất useMemo là caching lại giá trị return của function, mỗi lần component rerender nó sẽ kiểm tra giá trị tham số truyền vào function nếu giá trị đó không thay đổi, thì return value đã caching trong memory. Ngược lại nếu giá trị tham số truyền vào thay đổi, nó sẽ thực hiện tính toán lại vào trả về value, sao đó caching lại value cho những lần rerender tiếp theo.
- cách sử dụng: tương đối giống với **useCallback** cũng có tham số truyền vào là callback function và dependencies

  ```jsx
  useMemo(() => {
    // logic code

    return result;
  }, [dependencies]);
  ```

  khi sử dụng useMemo như trên thì callback function chỉ bị thực hiện lại khi dependencies thay đổi đãn tới kết quả result thay đổi

---

### useReduce() hook

- **Từ useState đến useReducer**

  - Vậy nếu trong trường hợp logic state của component trở nên lớn và phức tạp hợp thì khi đó dùng ta sẽ dùng một hàm hook là `useReducer` sẽ giúp chúng ta dễ quản lý và tổ chức state tốt hơn.
  - Vậy `useReducer` là gì, thực chất là là một phiên bản nâng cao của `useState`, dùng trong trường hợp local state của component phức tạp, có nhiều action làm thay đổi state đó. Thay vì các bạn dùng nhiều `useState` hoặc `useState` với value là nested object/array và viết nhiều function để thay đổi state thì bây giờ các bạn có thể tổ chức state và các action làm thay đổi state đó 1 cách logic nhờ `useReducer`

- **Reducer là gì**

  - Để sử dụng `useReducer hook`; đầu tiên chúng ta cần biết `reducer` là gì, đơn giản là một hàm có 2 tham số là **state**, **action** và trả về **new state** sau khi thực hiện một **action**, hãy tưởng tượng reducer như là một bộ chuyển đổi, nhận input, thực hiện action tác động đến input đó, rồi tạo ra output.
    ```jsx
    (state, action) => newState;
    ```
  - Chúng ta cùng xem qua một reducer cụ thể nhé:

    ```jsx
    const todoReducer = (state, action) => {
      switch (action.type) {
        case "DO_TODO":
          return state.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, complete: true };
            } else {
              return todo;
            }
          });
        case "UNDO_TODO":
          return state.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, complete: false };
            } else {
              return todo;
            }
          });
        default:
          return state;
      }
    };
    ```

    Ở trên là một Todo reducer; state ban đầu là list items todo, có 2 kiểu action type để chuyển đổi 2 trạng thái tương ứng của item là complete: true or false.

  - Và sử sụng todoReducer đó như sau:

    ```jsx
    const initialTodos = [
      {
        id: "a",
        task: "Learn React",
        complete: false,
      },
      {
        id: "b",
        task: "Learn Firebase",
        complete: false,
      },
    ];

    const action = {
      type: "DO_TODO",
      id: "a",
    };

    const newTodos = todoReducer(initialTodos, action);

    console.log(newTodos);
    // [
    //   {
    //     id: 'a',
    //     task: 'Learn React',
    //     complete: true,
    //   },
    //   {
    //     id: 'b',
    //     task: 'Learn Firebase',
    //     complete: false,
    //   },
    // ]
    ```

    Đó là 1 ví dụ đơn giản về reducer, cũng dễ hiểu đúng không nào, và bây giờ chúng ta cùng tìm hiểu useReducer hook trong React nhé

- **useReducer() hook**

  - Như đã nói ở trên **useReducer** hook được sử dụng trong trường hợp component có state phức tạp và có nhiều action type làm thay đổi state đó.

  - `useReducer function` nhận vào **reducer** và **initialState** khởi tạo ban đầu, trả về **state** hiện tại và **dispatch function** dùng để trigger 1 action

  - Ok, chúng ta sẽ viết một TodoApp có thể render ra list item và toggle item đó đã hoàn thành hay chưa nhé, mình sẽ sử dụng lại **todoReducer** và **initialTodos** như trên nhé

    ```jsx
    import React from 'react';

    const initialTodos = [...]; // same as above
    const todoReducer = (state, action) => newState; //same as above

    const App = () => {
      const [todos, dispatch] = React.useReducer(
        todoReducer,
        initialTodos
      );

      const handleChange = todo => {
        dispatch({
          type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
          id: todo.id,
        });
      };

      return (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleChange(todo)}
                />
                {todo.task}
              </label>
            </li>
          ))}
        </ul>
      );
    };

    export default App;
    ```

  - Ở ví dụ trên:

    - React.useReducer: dòng này sử dụng useReducer với 2 tham số todoReducer và initialTodos, trả về todos hiện tại và dispatch dùng để send action đến reducer làm thay đổi list todos
    - handleChange: hàm này dùng để dispatch action chuyển đổi trạng thái của item là hoàn thành or chưa hoàn thành
    - Tiếp theo chúng ta sẽ render ra list item todos đi kèm với 1 checkbox để switch trạng thái complete của item đó, mỗi lần check or uncheck thì sẽ call handleChange
    - Mỗi lần switch trạng thái hoàn thành như vậy sẽ update todos và component sẽ được render lại với list todos vừa được update

- **Kết Luận**

  `React useReducer hook là một cách hữu ích để quản lý state trong React bên cạnh useState, và nó có thể kết hợp với context dùng để quản lý state trong một ứng dụng mà có thể không cần sử dụng đến redux`

---

### useContext() hook

- **Đặt vấn đề**
  - Nếu không có React Context, chúng ta sẽ sử dụng kỹ thuật là “prop drilling” trong đó chúng ta sẽ phải truyền data xuống các component mặc dù một số component không cần dữ liệu đó.
  - Việc sử dụng “prop drilling” thì việc truyền dữ liệu đến các component con lồng nhau sâu sẽ rất cồng kềnh.
  - Do đó, React Context xuất hiện để khắc phục những nhược điểm của “prop drilling”.
  - **React Context** sẽ cho phép chúng ta có thể tạo data và truyền nó với một provider đến tất cả component trong ứng dụng React mà không cần dùng “prop drilling”.
- **Cách sử dụng React Context**

  để hiểu rõ cách dùng cũng như cách hoạt động của useContext ta cùng làm 1 ví dụ sau.

  - **1. Tạo Food Context**

    ```jsx
    import React, { createContext, useState } from "react";
    // Initiate Context
    const FoodContext = createContext();
    // Provide Context
    export const FoodProvider = ({ children }) => {
      const [name, setName] = useState("Trà Xanh");
      const [location, setLocation] = useState("Thái Nguyên");
      return (
        <FoodContext.Provider value={{ name, location, setName, setLocation }}>
          {children}
        </FoodContext.Provider>
      );
    };

    export default FoodContext;
    ```

    Ở đây, tạo hàm **provider** để cung cấp **context** vừa khởi tạo. Hàm này sẽ là cha của tất cả **component** khác trong ứng dụng này.

    Và những dữ liệu trong **value** như **name**,**location**,**setName…** sẽ có thể được truy cập từ tất cả **child components**.

    Cuối cùng là export **FoodContext** để tất cả **child components** của **FoodProvider** có thể sử dụng.

  - **2. Wrap the App component với Context.**

    **Context** là _global variable._

    Để context data có sẵn trong toàn bộ ứng dụng thì trong `index.js` chúng ta import FoodProvider và wrap `<App /> `.

    ```jsx
    import React from "react";
    import ReactDOM from "react-dom";
    import "./index.css";
    import App from "./App";
    import { FoodProvider } from "./FoodContext";

    ReactDOM.render(
      <FoodProvider>
        <App />
      </FoodProvider>,
      document.getElementById("root")
    );
    ```

  - **3. Sử dụng name và location trong components.**
    Trong `NameComponent.jsx` import FoodContext dùng hook `useContext`.

    ```jsx
    import React, { useContext } from "react";
    import FoodContext from "../FoodContext";

    const NameComponent = () => {
      //Retrieve context data
      const food = useContext(FoodContext);

      return (
        <div style={{ marginTop: "30px" }}>
          <h2 className="is-size-4">
            <strong>Name</strong>: {food.name}
          </h2>
        </div>
      );
    };
    ```

    Tương tự với `LocationComponent.jsx`

    ```jsx
    import React, { useContext } from "react";
    import FoodContext from "../FoodContext";

    const LocationComponent = () => {
      // Retrieve context data
      const food = useContext(FoodContext);

      return (
        <div style={{ marginTop: "30px", marginLeft: "50px" }}>
          <h2 className="is-size-4">
            <strong>Location</strong>: {food.location}
          </h2>
        </div>
      );
    };
    ```

  - **4. Cách update data trong context**

    Tương tự, trong `FoodForm.jsx` ta cũng import FoodContext và sử dụng hook `useContext` để lấy context data.

    ```jsx
    import React, { useContext } from "react";
    import FoodContext from "./FoodContext";

    const FoodForm = () => {
      // Retrieve context data
      const food = useContext(FoodContext);

      return (
        <div className="food-form">
          <div className="input-item">
            <label className="label" style={{ marginRight: "28px" }}>
              Update Name:{" "}
            </label>
            <input
              className="input"
              onChange={(e) => food.setName(e.target.value)}
            />
          </div>

          <div className="input-item">
            <label className="label">Update Location: </label>
            <input
              className="input"
              onChange={(e) => food.setLocation(e.target.value)}
            />
          </div>
        </div>
      );
    };
    export default FoodForm;
    ```

---

### useImperativeHandle() hook

- **useImperativeHandle**: có chức năng giúp Component child có thể tùy chỉnh các trả về ref cho Component cha. `useImperativeHandle` phải đi kèm với `forwardRef`

- Việc sử dụng nó bản chất hỗ trợ thêm cho ref, cần tránh hạn chế dùng trong tất cả các trường hợp nhằm bảo toàn tính toàn vẹn của dữ liệu

- **ví dụ:**

  - ở component con:

    ```jsx
    import React, { useRef, useImperativeHandle, forwardRef } from "react";

    function ChildInput(props, ref) {
      const inputRef = useRef();
      useImperativeHandle(ref, () => inputRef.current);

      return <input type="text" ref={inputRef} />;
    }

    export default forwardRef(ChildInput);
    ```

  - ở component cha:

    ```jsx
    import React, { useEffect, useRef } from "react";
    import ChildInput from "./ChildInput";

    export function ImperativeHandle() {
      const inputRef = useRef();

      useEffect(() => {
        inputRef.current.focus();
      }, []);

      return (
        <div>
          <ChildInput ref={inputRef} />
        </div>
      );
    }
    ```
