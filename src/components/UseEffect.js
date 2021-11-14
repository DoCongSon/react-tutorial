import React, { useState, useEffect } from "react";

const lessons = [
  { id: 1, title: "useState hook" },
  { id: 2, title: "useEffect hook" },
  { id: 3, title: "useLayoutEffect hook" },
];

export default function UseEffect() {
  const storage = Number(JSON.parse(localStorage.getItem("counter"))) ?? 0;
  const [counter, setCounter] = useState(storage);
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [num, setNum] = useState(0);
  const [avatar, setAvatar] = useState();
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    if (title) document.title = title;
    else document.title = "Đỗ Công Sơn";
  }, [title]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const counter = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 1000);

    // clear function
    return () => {
      clearInterval(counter);
    };
  }, []);

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    console.log(file);
    file.linkPreview = URL.createObjectURL(file);

    setAvatar(file);
  };

  // sau khi upload file mới thì xoá file cũ để tránh dò rỉ bộ nhớ
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.linkPreview);
    };
  }, [avatar]);

  useEffect(() => {
    const handleComment = ({detail}) => {
      console.log(detail);
    }
    window.addEventListener(`lesson-${lessonId}`, handleComment);

    // cleanup function
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    }
  }, [lessonId])

  return (
    <div>
      <h1>bạn đã click {counter} lần!</h1>
      <h2>counter: {num}</h2>
      <h2>chiều rộng cửa sổ là: {width}</h2>
      <input onChange={handleChange} value={title} />
      <button
        onClick={() => {
          setCounter(counter + 1);
          localStorage.setItem("counter", counter + 1);
        }}
      >
        Click me!
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <input type="file" onChange={handleAvatar} />
      <img src={avatar && avatar.linkPreview} alt="avatar" />
      <h1>Fake lesson comments</h1>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            onClick={(e) => setLessonId(lesson.id)}
            style={{color: lessonId === lesson.id ? "red" : "blue", cursor: "pointer"}}
          >
            {lesson.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
