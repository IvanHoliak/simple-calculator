import React from "react";

type Props = {
    id: number;
    value: string;
    text: string;
    onClickValue: (value: string) => void;
};

const Button = (props: Props) => {
    return (
        <button
            className="button"
            onClick={() => props.onClickValue(props.value)}
        >
            {props.text}
        </button>
    );
};

export default Button;
