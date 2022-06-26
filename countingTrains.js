let newInventoryCarModels = ["S1", "T1", "S2", "S1", "S2", "S1"];
let newInventoryCarTypes = [
  "StockCar",
  "Refrigerator",
  "StockCar",
  "Lorrie",
  "Lorrie",
  "Lorrie",
];
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951];

let i = 0;
let typeS1Count = 0;
while (i < newInventoryCarModels.length) {
  if (newInventoryCarModels[i] === "S1") {
    typeS1Count += 1;
  }
  i += 1;
}

console.log({ typeS1Count });
