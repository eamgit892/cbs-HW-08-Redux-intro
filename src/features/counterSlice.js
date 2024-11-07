import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    value: 0,
    adder: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState, 
    reducers: {
        increment: (state) => {
            state.value += 1
        }, 
        decrement: (state) => {
            state.value -= 1
        },
        reload: (state) => {
            state.value = 0
        }, 
        incByValue: (state, action) => {
            state.value += Number(action.payload)
        },
        decByValue: (state, action) => {
            state.value -= Number(action.payload)
        },
        mulByValue: (state, action) => {
            state.value *= Number(action.payload)
        },
        divideByValue: (state, action) => {
            state.value /= Number(action.payload)
        },


    }
})

export const { increment, decrement, 
    reload, incByValue, decByValue,
    mulByValue, divideByValue } = counterSlice.actions
export const selectCount = (state) => state.counter.value
export const getAdder    = (state) => state.counter.adder

export default counterSlice.reducer