import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "../video/abc.mp4";

// ref nhận qua đỐi số thứ 2 sau props
function Video(props, ref) {
    const videoRef = useRef();

    // useImperativeHandle nhận đối số thứ 1 là ref, dối sô thứ 2 là callback function trả về 1 object
    // chứa các function hoặc gì đó. mà ở component cha sẽ nhận được thông qua Ref được truyền qua props
    // tránh trường hợp truyền cả ref làm mấT tính toàn vẹn
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }));
  return <video src={video1} ref={videoRef} width={200} />;
}
// forwardRef dùng để chuyểN tiếp ref từ component cha xuống component con
export default forwardRef(Video);
// description