// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const printForcast = function (arr) {
  let txt = "";
  for (let i = 0; i < arr.length; i++) {
    txt += `${arr[i]}°C in ${i + 1} days...`;
  }
  console.log("..." + txt);
};

const printForcast2 = function (arr) {
  arr.forEach((temp, i) => {
    console.log(`${temp}°C in ${i + 1} days...`);
  });
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForcast(data1);
printForcast2(data2);
