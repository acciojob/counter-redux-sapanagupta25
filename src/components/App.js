import React from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "../counterReducer";

const App = () => {
    const dispatch = useDispatch();
    const { counter } = useSelector((state) => state);
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(inc())}>increment</button>
            <button onClick={() => dispatch(dec())}>decrement</button>
        </div>
    );
};

export default App;
