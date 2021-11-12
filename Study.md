# Hooks

- Hooks là những hàm cho phép bạn “kết nối” React state và lifecycle vào các components sử dụng hàm.

> react là một Single-page Application và để thực hiện việc này nó cần có đến các state - các trạng thái của các thẻ html, vậy khi chúng ta thực hiện một tác vụ làm thay đổi giao diện thì chúng ta đồng thời update lại state này, dựa vào state này mà react có thể biết được bạn đang làm cái gì và nó có thể thay đổi giao diện theo ý của bạn.

> lifeCycle thì đúng như tên gọi nó là một vòng đời của một component, từ khi các bạn truy cập hoặc thực hiện load trang, cho đến khi các bạn xuất kết quả về là thành công hoặc thất bại

- Với Hooks bạn có thể sử dụng state và lifecycles mà không cần dùng ES6 Class.

----------

### userState hook

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
  - `setState` và `innitState` có thể là hàm comeback
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
----------
  

