import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch() 

    return (
        <div>
            <div>
                <button 
                    aria-lable="inc. value"
                    onClick={() => dispatch(increment())}
                > Increment 
                </button>
                <span>{count}</span>
                <button 
                    aria-lable="dec. value"
                    onClick={() => dispatch(decrement())}
                > Decrement
                </button>
            </div>
        </div>
    )
}