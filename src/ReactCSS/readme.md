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

- clsx:

  ```jsx
  import clsx from "clsx";

  // Strings (variadic)
  clsx("foo", true && "bar", "baz");
  //=> 'foo bar baz'

  // Objects
  clsx({ foo: true, bar: false, baz: isTrue() });
  //=> 'foo baz'

  // Objects (variadic)
  clsx({ foo: true }, { bar: false }, null, { "--foobar": "hello" });
  //=> 'foo --foobar'

  // Arrays
  clsx(["foo", 0, false, "bar"]);
  //=> 'foo bar'

  // Arrays (variadic)
  clsx(["foo"], ["", 0, false, "bar"], [["baz", [["hello"], "there"]]]);
  //=> 'foo bar baz hello there'

  // Kitchen sink (with nesting)
  clsx(
    "foo",
    [1 && "bar", { baz: false, bat: null }, ["hello", ["world"]]],
    "cya"
  );
  //=> 'foo bar hello world cya'
  ```

- classnames:

  ```jsx
  classNames("foo", "bar"); // => 'foo bar'
  classNames("foo", { bar: true }); // => 'foo bar'
  classNames({ "foo-bar": true }); // => 'foo-bar'
  classNames({ "foo-bar": false }); // => ''
  classNames({ foo: true }, { bar: true }); // => 'foo bar'
  classNames({ foo: true, bar: true }); // => 'foo bar'

  // lots of arguments of various types
  // có thể truyền vào rất nhiều đối số nhiều loại khác nhau
  classNames("foo", { bar: true, duck: false }, "baz", { quux: true }); // => 'foo bar baz quux'

  // other falsy values are just ignored
  // các giá trị bị bỏ qua
  classNames(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // => 'bar 1'

  // Arrays will be recursively flattened as per the rules above:
  // Mảng sẽ được làm phẳng một cách đệ quy theo các quy tắc ở trên:
  var arr = ["b", { c: true, d: false }];
  classNames("a", arr); // => 'a b c'
  ```
