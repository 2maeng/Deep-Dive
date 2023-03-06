// 08-10
for (var i = 0; i < 2; i++) {
  console.log(i);
}

// 08-11
for (var i = 1; i >= 0; i--) {
  console.log(i);
}

// 08-12
// 무한루프
// for (;;) { ... }

// 08-13
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
// [1, 5]
// [2, 4]
// [3, 3]
// [4, 2]
// [5, 1]