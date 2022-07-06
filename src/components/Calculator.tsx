import React from "react";
import Buttons from "./Buttons";
import Result from "./Result";

type Props = {};

const Calculator = (props: Props) => {
    return (
        <div className="calculator">
            <Result />
            <Buttons />
        </div>
    );
};

export default Calculator;
