import { content } from "../constants";
import useAppDispatch from "../hooks/useAppDispatch";
import Button from "./Button";
import { removeLastChar, setInputValue, setInputValueDot, math, result, clearInputState, clearFullState, workWithX, minusPlus, percent } from "../store/reducers/calculatorReducer";

const Buttons = () => {
    const dispatch = useAppDispatch();

    const onClickValue = (value: string) => {
        if(value.match(/^[0-9]$/gi)){
            dispatch(setInputValue(value));
        }else if(value.match(/\./gi)){
            dispatch(setInputValueDot(value));
        }else if(value.match(/Back/gi)){
            dispatch(removeLastChar());
        }else if(value.match(/^[+|\-|/|*]$/gi)){
            dispatch(math(value));
        }else if(value.match(/\=/gi)){
            dispatch(result());
        }else if(value.match(/CE/gi)){
            dispatch(clearInputState());
        }else if(value.match(/C/gi)){
            dispatch(clearFullState());
        }else if(value.match(/\x/gi)){
            dispatch(workWithX(value));
        }else if(value.match(/±/gi)){
            dispatch(minusPlus());
        }else if(value.match(/%/gi)){
            dispatch(percent());
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
