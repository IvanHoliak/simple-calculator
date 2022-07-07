export const calculator = (str: string): string => {
    const sep: string = str.split(" ")[1];
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
        default: 
            sum = "0";
    };

    return sum;
};

export const mathX = (num: string, str: string): string => {
    let result: string = "";
    
    switch(str){
        case "1/x":
            result = (1 / Number(num)).toString();
            break;
        case "x²":
            result = (Number(num) ** 2).toString();
            break;
        case "√x":
            result = Math.sqrt(Number(num)).toString();
            break;
        default: 
            result = "0";
    };

    return result;
};

export const mathPercent = (str: string, num: string): string => {
    const sep: string = str.split(" ")[1];
    if(sep.match(/[+|-]/gi)){
        return ((Number(str.split(" ")[0]) / 100) * Number(num)).toString();
    }else{
        return (Number(num) / 100).toString();
    };
};