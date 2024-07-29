import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(20);

  //let counter = 15;

  const addValue = () => {
    //console.log(" value added", Math.random());
    console.log(" clicked", counter);
    //counter=counter+1;
    /*if (counter > 15) {
      //setcounter(counter + 1);
    }*/
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
    setcounter((prevcounter) => prevcounter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    } else {
      <></>;
    }
  };

  return (
    <>
      <h1> React </h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
