/****************************
 *                          *
 *       Sort Content       *
 *                          *
 ****************************/
export class Sorts {
    sort(items, sortType) {
        console.log(items, sortType);
        if(sortType === "Alphabetic Ascending")
            return this.lexicographicQuickSort(items, 0, items.length - 1);
        
        if(sortType === "Most Visits")
            return this.visitQuickSort(items, 0, items.length - 1);

        if(sortType === "By Pament")
            return this.paymentQuickSort(items, 0, items.length - 1);

    }

    lexicographicQuickSort(sortArray, low, high) {
        console.log("hello");
        // while low and high are not equal
        if(low < high) {
            // puts greater values to right of pivot (high)
            // puts lesser values on right and returns pivots 
            // new position
            let pivot = this._partion(sortArray, low, high);

            // sort each side of the pivot
            this.lexicographicQuickSort(sortArray, low, pivot - 1);
            this.lexicographicQuickSort(sortArray, pivot + 1, high);
        }
        
        return sortArray;
    }

    // high acts as the pivot in this sort
    _partion(sortArray, low, high) {

        let pivot = sortArray[high].url;
        let index = low - 1;

        /* while sortArray[j] is <= pivot, we need
        to move the bigger numbers closer to
        the pivot and smaller numbers farther 
        from the pivot */
        for(let j = low; j < high; j++) {
            
            if(sortArray[j].url <= pivot) {
                index++;
                this._swap(sortArray, index, j);
            }
        }

        // place pivot in the right spot
        index++;
        this._swap(sortArray, index, high);
        return index;
    }

    visitQuickSort(sortArray, low, high) {
    // while low and high are not equal
    if(low < high) {
        // puts greater values to right of pivot (high)
        // puts lesser values on right and returns pivots 
        // new position
        let pivot = this.visitPartion(sortArray, low, high);

        // sort each side of the pivot
        this.visitQuickSort(sortArray, low, pivot - 1);
        this.visitQuickSort(sortArray, pivot + 1, high);
    }
    
    return sortArray;
    }

    // high acts as the pivot in this sort
    visitPartion(sortArray, low, high) {

    let pivot = sortArray[high].visits;
    console.log("pivot:  ", pivot);
    let index = low - 1;

    /* while sortArray[j] is >= pivot, we need
        to move the bigger numbers closer to
        the pivot and smaller numbers farther 
        from the pivot */
    for(let j = low; j < high; j++) {
        
        if(sortArray[j].visits >= pivot) {
            index++;
            this._swap(sortArray, index, j);
        }
    }

    // place pivot in the right spot
    index++;
    this._swap(sortArray, index, high);
    return index;
    }

    paymentQuickSort(sortArray, low, high) {
    // while low and high are not equal
    if(low < high) {
        // puts greater values to right of pivot (high)
        // puts lesser values on right and returns pivots 
        // new position
        let pivot = this.paymentPartion(sortArray, low, high);

        // sort each side of the pivot
        this.paymentQuickSort(sortArray, low, pivot - 1);
        this.paymentQuickSort(sortArray, pivot + 1, high);
    }
    
    return sortArray;
    }

    // high acts as the pivot in this sort
    paymentPartion(sortArray, low, high) {

    let pivot = sortArray[high].payment;
    let index = low - 1;

    /* while sortArray[j] is >= pivot, we need
        to move the bigger numbers closer to
        the pivot and smaller numbers farther 
        from the pivot */
    for(let j = low; j < high; j++) {
        
        if(sortArray[j].payment >= pivot) {
            index++;
            this._swap(sortArray, index, j);
        }
    }

    // place pivot in the right spot
    index++;
    this._swap(sortArray, index, high);
    return index;
    }

    // swap elements in an array
    _swap(sortArray, element1, element2) {
        let temp = sortArray[element1];
        sortArray[element1] = sortArray[element2];
        sortArray[element2] = temp;
    }
}

