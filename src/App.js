import {useState, useEffect} from "react";

function Hello() {
  // 1
  // function byFn() {
  //   console.log("bye");
  // }
  // function hiFn() {
  //   console.log("hi");
  //   return byFn; // cleanup function
  // }
  // useEffect(hiFn, []);

  // 2
  // useEffect(function() {
  //   console.log("hi");
  //   return function() {
  //     console.log("bye");
  //   } // cleanup function
  // }, []);

  // 3
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye"); // cleanup function
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
