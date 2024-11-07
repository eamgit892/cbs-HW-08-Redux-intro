import { createSlice } from "@reduxjs/toolkit";

const initialState2 = {
    value: 0,
}

export const counterSlice2 = createSlice({
    name: 'counter2',
    initialState2, 
    reducers: {
        incByTen: () => {
            state.value += 10
        },
        decByTen: () => {
            state.value -= 10
        },
        mulByTen: () => {
            state.value *= 10
        },
        divideByTen: () => {
            state.value /= 10
        },
    }
})

export const { incByTen, decByTen, mulByTen, divideByTen } = counterSlice2.actions

export default counterSlice2.reducer