## 1. CSS inline, import file css

- file style.css

  ```css
  .heading {
    font-weight: bold;
    line-height: 140%;
  }
  ```

- cách sử dụng

  ```jsx
  import "./style.css";

  function ReactCSS() {
    return (
      <h1
        className="heading"
        style={{ color: "red", fontSize: "24px", backgroundColor: "gray" }}
      >
        headings
      </h1>
    );
  }
  ```

## 2. CSS modules

- đuôi file `.module.css`
- việc sử dụng css module có tác dụng tránh trùng tên các class khi có nhiều component vì nó sẽ mã hoá các className
- **không** thể mã hoá cho các element html và các selector mặc định của css ví dụ như: h1, h2, ..., span, \*, html, body, ...vì vậy cần chú ý khi sử dụng


## 3. thư viện clsx và classnames