const freq = (n, str) => {
    // remove unwanted characters and convert the rest to lowercase
    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    // counting characters combinations
    let elementsObj = {};
    for (var i = 1; i < newStr.length; i++) {
        for (var j = 0; j < newStr.length; j++) {
            let element = newStr.substring(j, j + i);
            elementsObj[element] = newStr.split(element).length - 1;
        }
    } 
    // convert an object into an array
    let elementsArr = Object.entries(elementsObj);
    // filter an array by number of characters 
    const filteredArr = elementsArr.filter(([key, value]) => key.length === n);
    // sort an array from the greatest to the least and limit number of elements to 10
    let sortedArr = filteredArr.sort((a,b) => {
        return b[1] - a[1];
    }).slice(0, 10);

    return sortedArr; 
};

// Example
console.log(freq(3, "abracadabra")); 
// [[ 'abr', 2 ],[ 'bra', 2 ],[ 'rac', 1 ],[ 'aca', 1 ],[ 'cad', 1 ],[ 'ada', 1 ],[ 'dab', 1 ]]
