const productDetails = {};

//  forloop method
// for (let i = 0; i < 100; i++) {
//   productDetails["product-" + i] = { productName: "something" };
// }

// whileloop method

// let iterator = 1;
// while (iterator < 100) {
//   productDetails["product-" + iterator] = { productName: "something" };
//   iterator += 1;
// }

// console.log(productDetails);
// const productLabels = Object.keys(productDetails);

//  forloop method and application
for (let i = 0; i < 6; i++) {
  let starString = "";
  for (let j = 0; j < i; j++) {
    starString += "*";
    console.log(j, starString);
  }
}

const matrix = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 3, 5],
];

// console.log(matrix[0]);

// 1,2,3,3,4,5,5,3,5
const arr1 = [1, 2, 3];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

//  forloop method
// for (let i = 100; i > 50; i--) {
//   console.log(i);
// }

// for (let i = 0; i < 6; i++) {
//   let spaceString = "*";
//   let starString = "";
//   for (let j = 0; j < i; j++) {
//     spaceString += "*";
//   }
//   for (let j = 0; j < i; j++) {
//     starString += "*";
//   }

//   console.log("   " + spaceString + starString);
// }

// for (let i = 6; i > 0; i--) {
//   let spaceString = "*";
//   let starString = "";
//   for (let j = i; j > 0; j--) {
//     spaceString += "*";
//   }
//   for (let j = 0; j < i; j--) {
//     starString += "*";
//   }

//   console.log("   " + spaceString + starString);
// }

let shippingStatus = false;
// after box is shipped
shippingStatus = true;
let day = 0;
while (shippingStatus === true) {
  console.log({ day });
  if (day === 5) {
    shippingStatus = false;
    console.log("Your product is delivered");
  } else {
    console.log("Your product is being shipped");
  }
  day += 1;
}
