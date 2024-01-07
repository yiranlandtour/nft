const fs = require('fs');

export function readAndTran(){
fs.readFile('graphe.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    var NftData = JSON.parse(data.toString());

    console.log(NftData);

});

const value = new Map([
    ["15", 14],
    ["14", 16],
    ["13", 18],
    ["12", 20],
    ["11", 22],
    ["10", 36],
    ["9", 38],
    ["8", 40],
    ["7", 42]
  ]);
  return NftData;
}

export function isGenzero(){
    
}