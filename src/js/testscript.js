"use strict";

// function constuctorTest(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function newtest() {
//     console.log(`hello тебе ${this.name}`);
//   };
// }

// const Ivan = new constuctorTest("Ivan", 23);
// const Sergey = new constuctorTest("Sergey", 34);

// constuctorTest.prototype.exit = function () {
//   console.log(`Вышел такой, ${this.name}!`);
// };

// Ivan.exit();

// Ivan.hello();

// console.log(Ivan);

// console.log(Sergey);
// // ___________________

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// const Maxin = new User("Maxim", 12);
// const Danil = new User("Danil", 43);

// console.log(Maxin);
// console.log(Danil);

// // -------------------------------

// function Users(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hallo = function newfunc() {
//     console.log(`Привет тебе моя ${this.name}, я знаю тебе ${this.id}`);
//   };
// }

// const Marina = new Users("Marina", 34);
// const Ander = new Users("Ander", 23);

// Marina.hallo();

// Users.prototype.exit = function newfunce() {
//   console.log(`Привет тебе мой родной ${this.name}, я знаю тебе ${this.id}`);
// };

// Ander.exit();
// // -----------------------

// function serty(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }

// const nreser = new serty(23, 45);
// console.log(nreser);
// // -----------------------

// function testfunce(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const dert = {
//   name: "Danil",
// };

// testfunce.call(dert, "Maks");
// testfunce.apply(dert, ["Maks"]);

// // -----------------------

function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(4));
console.log(double(12));
// -----------------------
const testThis = document.querySelector("button");
testThis.addEventListener("click", function () {
  console.log(this);
});

const obj = {
  test: 5,
  derty: function () {
    const seyt = () => {
      console.log(this.test);
    };
    seyt();
  },
};

obj.derty();
// --------
const second = (a) => a * 2;
console.log(second(6));
// -----------------

class Newtestfirstclass {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  metodforclass() {
    return this.width + this.height;
  }
}

const danyefunc = new Newtestfirstclass(12, 34);
const danyefunctwo = new Newtestfirstclass(10, 11);
console.log(danyefunc.metodforclass());
console.log(danyefunctwo.metodforclass());

class Secondfunc extends Newtestfirstclass {
  constructor(width, height, text, bgcolor) {
    super(width, height);
    this.text = text;
    this.bgcolor = bgcolor;
  }

  secondfunctextbg() {
    console.log(`Здесь текст: ${this.text}, здесь цвет: ${this.bgcolor}`);
  }
}

const div = new Secondfunc(23, 6, "text test", "black");
div.secondfunctextbg();
console.log(div.metodforclass());

const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

function checkFilms(arr) {
  return arr.some((film) => film.id || film.id === 0);
}

const werty = checkFilms(films);
console.log(werty);
