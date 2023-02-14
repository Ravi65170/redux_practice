import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import decNumber from "./actions/index,js";
import inNumber from "./actions/index,js";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  console.log(myState);
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <button onClick={() => dispatch(decNumber())}> - </button>

          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          />

          <button onClick={() => dispatch(inNumber())}> + </button>
        </div>
      </div>
    </>
  );
};

export default App;
