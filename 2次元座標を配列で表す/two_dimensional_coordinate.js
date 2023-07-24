const arr = [
  [0, 3],
  [1, 1],
  [0, 2],
];

let max_x = 0;
let max_y = 0;
for (let i = 0; i < arr.length; i++) {
  const [y, x] = arr[i];
  if (max_x < x) {
    max_x = x;
  }
  if (max_y < y) {
    max_y = y;
  }
}

let arr2 = new Array(max_y + 1)
  .fill(null)
  .map(() => new Array(max_x + 1).fill(0));

for (let i = 0; i < arr.length; i++) {
  const [y, x] = arr[i];
  arr2[y][x] = 1;
}
console.log(arr2);
