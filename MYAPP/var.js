// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Kim';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: 'Kim' };

var users = [
  { id: 1, name: 'Kim' },
  { id: 2, name: 'Park' },
];

var result = 10 + 20;

var score; // 변수 선언(변수 선언문)

console.log(score); // undefined

var score; // 변수 선언문

var score; // 변수 선언
score = 80; // 값의 할당

var score = 80; // 변수 선언과 값의 할당

console.log(score); // undefined

var score; // 1. 변수 선언
score = 80; // 2. 값의 할당

console.log(score); // 80

// 예제 04-06
var score; // 변수 선언
score = 80; // 값의 할당

// 예제 04-07
var score = 80; // 변수 선언과 값의 할당

// 예제 04-08
console.log(score); // undefined

var score; // 1. 변수 선언
score = 80; // 2. 값의 할당

console.log(score); // 80

// 예제 04-09
console.log(score); // undefined

var score = 80; // 변수 선언과 값의 할당

console.log(score); // 80

// 예제 04-10
console.log(score); // undefined

score = 80; // 값의 할당
var score; // 변수 선언

console.log(score); // ?

// 예제 04-11
var score = 80; // 변수 선언과 값의 할당
score = 90; // 값의 재할당

// 예제 04-12
var person, $elem, _name, first_name, val1;

// 예제 04-13
// var first-name; // SyntaxError: Unexpected token -
// var 1st; // SyntaxError: Invalid or unexpected token
// var this; // SyntaxError: Unexpected token this

// 예제 04-14
var firstname;
var firstName;
var FRISTNAME;

// 예제 04-16
var x = 3; // NG. x 변수가 의맣는 바를 알 수 없다.
var score = 100; // OK. score 변수는 점수를 의미한다.

// 04-17
// 경과 시간. 단위는 날짜다.
var d; // NG
var elapsedTimeInDays; // OK

// 04-18
// 카멜 케이스(camelCase)
var firstName;

//스네이크 케이스(snake_case)
var first_name;

// 파스칼 케이스(PascalCase)
var FirstName;

// 헝가리언 케이스(typeHungarianCase)
var strFirstName; // type + identifier
var $elem = document.getElementById('myId') // DOM 노드
var observable$ = fromEvent(document, 'click'); // RxJS 옵저버블