let elementsObject = {};

const freq = (n, str) => {
    // remove unwanted characters and convert the rest to lowercase
    let sss = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    // counting characters combinations
    for (var i = 1; i < sss.length; i++) {
        for (var j = 0; j < sss.length; j++) {
            let element = sss.substring(j, j + i);
            elementsObject[element] = (sss.split(element).length - 1);
        }
    } 
    // convert an object into an array
    let asArray = Object.entries(elementsObject);
    // filter an array by number of characters 
    const elementsArr = asArray.filter(([key, value]) => key.length === n);
    // sort an array from the greatest to the least and limit number of elements to 10
    let sortedArr = elementsArr.sort((a,b) => {
        return b[1] - a[1];
    }).slice(0, 10);

    return sortedArr;
}

console.log(freq(3, "abracadabra"));
