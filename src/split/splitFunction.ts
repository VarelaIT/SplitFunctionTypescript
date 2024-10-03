
export function split(originalString: string, delimiter: string): Array<string> | false {
    const result: Array<string> = [];
    const delimiterSize = delimiter.length;
    const originalStringSize = originalString.length;

    if(delimiterSize > originalStringSize)
        return false;
    
    let currentSlice: string = "";
    let match: string = "";
    let from = 0;
    for(let i = 0; i < originalStringSize; i++){ 
        for(let x = 0; x < delimiterSize; x++)
            currentSlice += originalString[i + x];

        if(delimiter === currentSlice){
            for(let y = from; y < i; y++)
                match += originalString[y];

            result.push(match);
            from = i + delimiterSize;
            i = i + delimiterSize;
            match = "";
        }
        currentSlice = "";
    }


    for(let y = from; y < originalStringSize; y++)
        match += originalString[y];

    result.push(match);

    return result;
}
