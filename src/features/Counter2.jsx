import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { reload, incByValue, decByValue,
          mulByValue, divideByValue, selectCount} from "./counterSlice";

export  function Counter2() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch() 

    const [inpValue, setInputValue] = useState('')

    return (
        <div>
                <button 
                    aria-label="reset"
                    onClick={() => dispatch(reload())}> Reset counter 
                </button><hr />
                <input type="number" maxLength={"2"} 
                    value={inpValue}
                    onChange={(e) => setInputValue(e.target.value)}
                /><br /><br />
                    {/* ADDITION */}
                <button 
                    aria-label="add by value"
                    onClick={() => dispatch(incByValue(inpValue))}> Add by value 
                </button>
                {/* SUBTRACT */}
                <button 
                    aria-label="dec. by value"
                    onClick={() => dispatch(decByValue(inpValue))}> Dec by value 
                </button>
                <br /><hr />
                {/* mul  */}
                <button 
                    aria-label="X by value"
                    onClick={() => dispatch(mulByValue(inpValue))}> Mul by value 
                </button>
                
                {/* div  */}
                <button 
                    aria-label="/ by value"
                    onClick={() => dispatch(divideByValue(inpValue))}> / by value 
                </button>

        </div>
    )
}