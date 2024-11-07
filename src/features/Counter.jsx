import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./counterSlice";

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch() 

    return (
        <div>
            <div>
                <span>{count}</span><br />

                <button 
                    aria-label="inc. value"
                    onClick={() => dispatch(increment())}> Increment 
                </button>
                <button 
                    aria-label="dec. value"
                    onClick={() => dispatch(decrement())}> Decrement
                </button>
            </div>
        </div>
    )
}