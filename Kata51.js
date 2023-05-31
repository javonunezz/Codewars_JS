function dirReduc(arr) {
  const oppositeDirs = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  function reduceDirections(arr) {
    let reduced = false;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] === oppositeDirs[arr[i]]) {
        reduced = true;
        i++; // Saltamos a los dos siguientes para no considerar el siguiente
      } else {
        result.push(arr[i]);
      }
    }

    if (reduced) {
      return reduceDirections(result);
    } else {
      return result;
    }
  }

  return reduceDirections(arr);
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
