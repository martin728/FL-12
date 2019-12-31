function getMin(...args) {
  return args.reduce((min, p) => p < min ? p : min);
}

console.log(getMin(1,5,2,3));