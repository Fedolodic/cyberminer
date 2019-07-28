export class Searcher {

    search(lines:string[], itemsToSearch:any) {
        const userInput:string[] = lines;
        const shiftedWebPageData:any = itemsToSearch;
        console.log(shiftedWebPageData);
        let searchResults:Object[] = [];
        
        for(let i = 0; i < shiftedWebPageData.length; i++) {
            const input = userInput[i];
            for(let j = 0; j < shiftedWebPageData.length; j++) {
                const data = shiftedWebPageData[j];
                const shiftedLines = data.shiftedLines;
                console.log(data);
                for(let k =0; k < shiftedLines.length; k++) {
                    const shiftLine = shiftedLines[k];

                    if (input === shiftLine) {
                        searchResults.push(data);
                        continue;
                    }
                }
            }
       }
        

        return searchResults;
    }
}