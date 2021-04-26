let firstStr = "to be or not to be";

let lettersAndDigits = 'abcdefghijklmnopqrstuvwxyz1234567890';
let str = "";
let elementsObject = {};
let elementsArr = [];

let n = 2;

firstStr = firstStr.toLowerCase();
for (var i = 0; i < firstStr.length; i++) {
  if (lettersAndDigits.includes(firstStr[i])) {
    str += firstStr[i];
  }
}

for (var i = 1;i < str.length; i++) {
  for (var j = 0;j < str.length; j++) {
    let element = str.substring(j, j+i);
    elementsObject[element] = (str.split(element).length-1);
  }
}

for (const [key, value] of Object.entries(elementsObject)) {
  elementsArr.push([key, value]);
}

for (var i = 0; i < elementsArr.length; i++) {
  for(var j = 0 ; j < elementsArr.length - i - 1; j++){
    if (elementsArr[j][1] < elementsArr[j + 1][1]) {
      var temp = elementsArr[j];
      elementsArr[j] = elementsArr[j+1];
      elementsArr[j + 1] = temp;
    }
  }
}

for (var i = 0; i < elementsArr.length; i++) {
      if (elementsArr[i][0].length !== n){
        delete elementsArr[i];
    }
  }

let x = elementsArr.filter(element => element);

console.log(x);

// IDK how to solve this task through functional programming. Sorry :( But I wanna learn tho. 