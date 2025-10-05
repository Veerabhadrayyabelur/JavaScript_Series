const a = ["a","b","c"]
const b = ["d","e","f"]
a.concat(b)
console.log(a.concat(b));

// spread operator

const c = [...a,...b];
console.log(c);
