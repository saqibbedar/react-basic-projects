import { useState } from "react";
import "./App.css";

const MyApp = () => {
  const [count, setCount] = useState(0);

  function addLike() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <div className="main">
        <h1>Hit like for my first React Project</h1>
        <div className="card">
          <button id="click" onClick={addLike}>
            Like
          </button>
          <p style={{ display: count >= 1 ? "block" : "none" }}>
            {count >= 2
              ? `Thankyou! for your Likes ${count} ❤️`
              : `Thankyou! for your Like ${count} ❤️`}
          </p>
        </div>
      </div>
    </>
  );
};

export default MyApp;
