import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function Rate() {
  const [thumbsUp, setthumbsUp] = useState(false);
  const [thumbsDown, setthumbsDown] = useState(false);

  const Up = () => setthumbsUp(!thumbsUp);
  const Down = () => setthumbsDown(!thumbsDown);
  return (
    <div>
      <button onClick={Up} hidden={thumbsDown}>
        Like
        <FaThumbsUp />
      </button>
      <button onClick={Down} hidden={thumbsUp}>
        Dislike
        <FaThumbsDown />
      </button>
    </div>
  );
}

export default Rate;
