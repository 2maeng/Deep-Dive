// 06-01
// 모두 숫자 타입이다.
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

// 06-02
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); //true

// 06-03
// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5

// 06-04
// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * 'String'); // NaN

// 06-05
// 자바스크립트는 대소문자를 구별한다.
var x = nan; // ReferenceError: nan is not defined

// 06-06
// 문자열 타입
var string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱(ES6)
string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

// 06-07 
// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello; // ReferenceError: hello is not defined

// 06-08
var template = `Template literal`;
console.log(template); // Template literal

// 06-09
// var str = 'Hello
// world.';
// SyntaxError: Invalid or unexpected token

// 06-10
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>;'
console.log(template);

// 06-11
// var template = '<ul>
//     <li><a href="#">Home</a></li>
// </ul>';
console.log(template);

// 06-12
var first = 'Ung-mo';
var last = 'Lee'

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.'); // My name is Ung-mo Lee.

// 06-13
var first = 'Ung mo';
var last = 'Lee';

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

// 06-14
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 06-15
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2}

// 06-16
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false

// 06-17
var foo;
console.log(foo); // undefined

// 06-18
var foo = 'Lee';

// 이전 참조를 제거. foo 변수는 더이상 'Lee'를 참조하지 않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
foo = null;

// 06-20
// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value

// 06-21
var score = 100;

// 06-22
// c 변수에는 1바이트 정수 타입의 값(-128 ~ 127)만 할당할 수 있다.
// char c;

// num 변수에는 4바이트 정수 타입의 값(-2,124,483,648 ~ 2,124,483,647)만 할당할 수 있다.
// int num;

// 06-23
var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = 'Hello';
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol(); // 심벌
console.log(typeof foo); // symbol

foo = {}; // 객체
console.log(typeof foo); // object

foo = []; // 배열
console.log(typeof foo); // object

foo = function(){}; // 함수
console.log(typeof foo); // function