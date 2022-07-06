const calculator = (str: string): string => {
    const sep = str.split(" ")[1];
    const arr: string[] = str.split(" ").filter(num => num !== sep);
    let sum: string = "";
    
    switch(sep){
        case "+":
            sum = (Number(arr[0]) + Number(arr[1])).toString();
            break;
        case "-":
            sum = (Number(arr[0]) - Number(arr[1])).toString();
            break;
        case "*":
            sum = (Number(arr[0]) * Number(arr[1])).toString();
            break;
        case "/":
            sum = (Number(arr[0]) / Number(arr[1])).toString();
            break;
    };

    return sum;

};

export default calculator;