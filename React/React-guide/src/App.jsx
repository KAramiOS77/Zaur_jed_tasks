import { PaintColor } from "./component/PaintColor";
import { Button } from "./component/Button";
import { Counter } from "./component/Counter";
import { Login } from "./component/Login";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Visible
      </button>
      {visible && <Login />}
    </>
  );
}

export default App;

// <div>
//   <PaintColor bgColor="red" />
//   <PaintColor bgColor="green" />
//   <PaintColor bgColor="blue" />
//   <Button
//     Clicked={() => {
//       console.log("clicked on me");
//     }}
//     bgColor="green"
//     text="click me"
//   />
// </div>
