import useAppSelector from "../hooks/useAppSelector";

type Props = {};

const Result = (props: Props) => {
    const number = useAppSelector(state => state.calculator);

    return (
        <div className="result">
            <div className="process">
                <p>{number.processString}</p>
            </div>
            <div className="current_number">
                <p>{number.inputValue}</p>
            </div>
        </div>
    );
};

export default Result;
