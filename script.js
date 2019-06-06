function maxMin(operations, x) {
    // Write your code here
    let elements = {};
    let min, max;
    let products = [];
    for (let o = 0; o < operations.length; o++) {
        for (let i = o; i < x.length; i++) {
            elements[x[i]] = x[i];
            if (operations[o] === 'pop') {
                delete elements[x[i]];
            }
            if(i === 0){
            min=x[i];
            max=x[i];
            }
            else{
                let count =1 ;
            for (let ele in elements) {
            if(count === 1){min=  elements[ele] }
                 max = elements[ele] > max ?elements[ele]:max;
                 min= elements[ele] < min ?elements[ele]:min;
             count++;
            }
        }
        products.push(min * max);
            break;
        }
    }
    return products;

}
