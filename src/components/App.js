import { useState, useEffect } from "react";
import "../App.css";

const App = () => {
  console.log("kitshen");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
  });
  useEffect(() => {
    console.log("useEffect with array");
  }, []);

  useEffect(() => {
    console.log("useEffect with secound array");
  }, []);

  useEffect(() => {
    console.log("useEffect with array Count");
  }, [count]);

  return (
    <>
      {console.log("Cokes")}
      <div className="container">
        <h1 className="text-center">{count}</h1>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          Add Count
        </button>
      </div>
    </>
  );
};

export default App;
