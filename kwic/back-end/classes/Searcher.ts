export class Searcher {

    search(lines:string[], itemsToSearch:any, booleanSymbols:any) {
        const userInput:string[] = lines;
        const shiftedWebPageData:any = itemsToSearch;
        console.log(shiftedWebPageData);
        let searchResults:Object[] = [];
        let searchResultIndex = []
       
    shiftedWebPageData.forEach((data:any) => {
        const lines = data.shiftedLines;
        const truthTable:any = [];

        userInput.forEach((input:any) => {         
            let isMatch = false;
            let progress = "";

            for(let j = 0; j < lines.length; j++) {
                const line = lines[j];

                if(line.length >= input.length) {
                    let k = 0, l = 0;
                    console.log("input and line: ", input, line)
                    for(let k = 0, l = 0; k < line.length && l < input.length; k++) {
                        console.log("input l and input k:  ", input[l], line[k]);
                        if(line[k] === input[l]) {
                            progress += line[k];
                            l++;
                        } else 
                            progress = "";  
                        
                        console.log("progress: ", progress);
                    }
                }

                console.log("input and progress: ", input, progress);
                if(input === progress) {
                    isMatch = true;
                    break;
                }

                progress = "";
            }

            console.log("isMatch:  ", isMatch);
            truthTable.push(isMatch);
        });

        console.log("truthTable", truthTable);

        if(booleanSymbols.length) {
            let ands:any = [];
            let ors:any = [];
            let andTruths:any = [];
            let finalTruths:any = [];

            booleanSymbols.forEach((symbol:any, index:number) => {
                if(symbol === "NOT") {
                    truthTable[index] = !truthTable[index]; console.log("truthable after not:  ", truthTable)}
                else if (symbol === "AND") 
                    ands.push(index);
                else if (symbol === "OR") 
                    if( index === 0 || booleanSymbols[index - 1] != "AND")
                        ors.push(index);
                    else
                        ors.push(index + 1);

            });
            
            console.log("ands:  ", ands);
            if(ands.length)
                ands.forEach((andInd:any) => {
                andTruths.push((truthTable[andInd] && truthTable[andInd + 1]));
            });
            
            console.log("andTruths:  ", andTruths)
            let finalTruth = (truthTable.length === 1) ? truthTable[0] : false;

            if(ors.length) {
                let andInd = 0;

                if(andTruths.length) {
                    for(let i = 0; i < ors.length; i++) {
                        finalTruth = andTruths.length > 1 ? 
                            andTruths[andInd] || andTruths[andInd + 1] : andTruths[0];

                        if(finalTruth === false)
                            break;
                    }
                }
                
                if(andTruths.length != truthTable.length / 2) { 
                    for(let i = 0; i < ors.length; i++) {
                    const index = ors[i];
                    finalTruth = finalTruth || truthTable[index];
                    
                    if(finalTruth === false)
                        break;
                    }
                }
            }
            else {
                for(let i = 0; i < ands.length; i++) {
                    finalTruth = andTruths[i];

                    if(finalTruth === false) 
                    break;
                }
            }

            console.log(finalTruth);
            if(finalTruth)
                searchResults.push(data);
        }
        else
            if(truthTable[0])
                searchResults.push(data);
    });

       return searchResults;
    }
}