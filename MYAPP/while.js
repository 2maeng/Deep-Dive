// 08-14
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count); // 0 1 2
  count++;
}

// 08-15
// 무한루프
// while (true) { ... }

// 08-16
var count = 0;

// 무한루프
while (true) {
    console.log(count);
    count++;
    // count가 3이면 코드 블록을 탈출한다.
    if (count === 3) break;
} // 0 1 2

// 08-17
var count = 0;

// count가 3 보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
    console.log(count); // 0 1 2
    count ++;
} while (count < 3);