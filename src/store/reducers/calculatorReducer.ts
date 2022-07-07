import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculator, mathPercent, mathX } from "../../helper/calculator";
import { ICalculatorState } from "../../types";

const initialState: ICalculatorState = {
    inputValue: "0",
    processString: "",
};

const calculatorReducer = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        setInputValue: (state, action: PayloadAction<string>) => {
            if (state.inputValue === "0") {
                state.inputValue = action.payload;
            } else {
                state.inputValue += action.payload;
            }
        },
        setInputValueDot: (state, action: PayloadAction<string>) => {
            if (!state.inputValue.match(/\./gi)) {
                state.inputValue += action.payload;
            }
        },
        removeLastChar: (state) => {
            if (state.inputValue.length > 1) {
                state.inputValue = state.inputValue.substring(0, state.inputValue.length - 1);
            } else {
                state.inputValue = "0";
            }
        },
        math: (state, action: PayloadAction<string>) => {
            if (!state.processString.length) {
                state.processString += `${state.inputValue} ${action.payload}`;
                state.inputValue = "0";
            } else {
                const calc = calculator(`${state.processString} ${state.inputValue}`);
                state.processString = `${calc} ${action.payload}`;
                state.inputValue = "0";
            }
        },
        result: (state) => {
            if (state.processString.length) {
                state.inputValue = calculator(`${state.processString} ${state.inputValue}`);
                state.processString = "";
            }
        },
        clearFullState: (state) => {
            state.inputValue = "0";
            state.processString = "";
        },
        clearInputState: (state) => {
            state.inputValue = "0";
        },
        workWithX: (state, action: PayloadAction<string>) => {
            if(state.inputValue !== "0"){
                state.inputValue = mathX(state.inputValue, action.payload);
            };
        },
        minusPlus: (state) => {
            if(state.inputValue !== "0"){
                state.inputValue = (Number(state.inputValue) * -1).toString();
            };
        },
        percent: (state) => {
            if(state.processString.length){
                state.inputValue = mathPercent(state.processString, state.inputValue);
            }else{
                state.inputValue = "0";
            };
        }
    },
});

export const {
    setInputValue,
    setInputValueDot,
    removeLastChar,
    math,
    result,
    clearFullState,
    clearInputState,
    workWithX,
    minusPlus,
    percent
} = calculatorReducer.actions;

export default calculatorReducer.reducer;
