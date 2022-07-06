import { content } from "../constants";
import useAppDispatch from "../hooks/useAppDispatch";
import Button from "./Button";
import { removeLastChar, setInputValue, setInputValueDot, math, result } from "../store/reducers/calculatorReducer";

type Props = {};

const Buttons = (props: Props) => {
    const dispatch = useAppDispatch();

    const onClickValue = (value: string) => {
        if(value.match(/^[0-9]$/gi)){
            dispatch(setInputValue(value));
        }else if(value.match(/\./gi)){
            dispatch(setInputValueDot(value));
        }else if(value.match(/<-/gi)){
            dispatch(removeLastChar());
        }else if(value.match(/^[+|\-|/|*]$/gi)){
            dispatch(math(value));
        }else if(value.match(/\=/gi)){
            dispatch(result());
        }
    };

    return (
        <div className="buttons">
            {content.map(char => (
                <Button key={char.id} {...char} onClickValue={onClickValue}/>
            ))}
        </div>
    );
};

export default Buttons;
