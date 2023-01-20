import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Main } from "./component/Main";

function App() {
  return (
    <>
      <Header bgColor="blue" text="Mercedes Benz" />
      <Main
        heading="Legendary W210 E-class"
        text="Drive to Hell"
        img="benzfoto"
        width="50%"
        height="35%"
      />
      <Footer bgColor="blue" text="If it is AMG, then you drive AMG" />
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
