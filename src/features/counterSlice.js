import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    value: 0,
    
    // for Task 3 
    notes: [],
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
        
        // for Task 3 
        addNote: (state, action) => {
            console.log('addnote triggered', action)
            state.notes = [...(state.notes), action.payload]
            console.log(state.notes);
        },
        



    }
})

export const { increment, decrement, 
    reload, incByValue, decByValue,
    mulByValue, divideByValue, addNote } = counterSlice.actions

export const selectCount = (state) => state.counter.value
export const getNotes    = (state) => state.counter.notes

export default counterSlice.reducer