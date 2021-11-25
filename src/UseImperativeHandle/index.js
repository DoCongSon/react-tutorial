import { useEffect, useRef } from "react";
import Video from "../video/Video";

export default function UseImperativeHandle() {
  const videoRef = useRef();
  useEffect(() => {
    console.log(videoRef.current);
  });

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      {/* videoRef chính là rè nhận được từ component Video */}
      <Video ref={videoRef} />
      <button onClick={handlePlay}>play</button>
      <button onClick={handlePause}>pause</button>
    </div>
  );
}
