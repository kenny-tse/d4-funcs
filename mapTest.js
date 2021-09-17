const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

const mapTest = function(arrayToMap,cb) {

  let value = arrayToMap.map(cb);
  return value;
};

console.log(mapTest(lighthouses, (element, index, array) => {
  return array[index].length;
}));

