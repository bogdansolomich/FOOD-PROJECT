window.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    allitems = document.querySelector(".tabheader__items");

  const deadline = "2025-06-11";

  function getTimeRemaining(endtime) {
    let days, seconds, minutes, hours;
    let t = Date.parse(endtime) - Date.parse(new Date());
    if (t <= 0) {
      days = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;
    } else {
      (days = Math.floor(t / (1000 * 60 * 60 * 24))),
        (seconds = Math.floor((t / 1000) % 60)),
        (minutes = Math.floor((t / 1000 / 60) % 60)),
        (hours = Math.floor((t / (1000 * 60 * 60)) % 24));
    }
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
    }
  }

  setClock(".timer", deadline);

  //Modal

  const openModal = document.querySelectorAll("[data-modal]"),
    closeModal = document.querySelector("[data-close]"),
    modalWindow = document.querySelector(".modal");

  function openModalFunc() {
    modalWindow.classList.toggle("show");
    document.body.style.overflow = "hidden";
    clearInterval(modalTimerId);
  }

  openModal.forEach((btn) => {
    btn.addEventListener("click", openModalFunc);
  });

  function closemodal() {
    modalWindow.classList.toggle("show");
    document.body.style.overflow = "";
  }

  closeModal.addEventListener("click", closemodal);

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      closemodal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalWindow.classList.contains("show")) {
      closemodal();
    }
  });

  const modalTimerId = setTimeout(openModalFunc, 3000);

  function showModalByScroll() {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      // modalWindow.classList.toggle("show");
      // document.body.style.overflow = "hidden";
      // clearInterval(modalTimerId);
      openModalFunc();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  // ------------ Использование классов ---------------

  class NewClassBlock {
    constructor(img, alt, title, description, price, parentelement) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.price = price;
      this.convert = 27;
      this.parent = document.querySelector(parentelement);
      this.changeUAH();
    }

    changeUAH() {
      this.price = this.price * this.convert;
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = `<div class="menu__item">
                    <img src=${this.img} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
                `;

      this.parent.append(element);
    }
  }
  const vegyMenu = new NewClassBlock(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container"
  );
  vegyMenu.render();

  new NewClassBlock(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    14,
    ".menu .container"
  ).render();

  new NewClassBlock(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    21,
    ".menu .container"
  ).render();
});
// ---------Оператор рест--------------
const testoperatorrest = function (a, b, ...rest) {
  console.log(a, b, rest);
};

testoperatorrest(24, 12, "narafd", "next test");

function funtest(a, b = 15) {
  console.log(a + b);
}

funtest(12);
// --------------------------

// const derty = {
//   name: "julia",
//   family: "alex",
//   ages: 23,
//   address: "sadova"
// };

// console.log(JSON.parse(JSON.stringify(derty)));

const derty = {
  name: "julia",
  family: "alex",
  ages: 23,
  address: "sadova",
  parents: {
    nom: "Olga",
    dad: "Mike",
  },
};

const clone = JSON.parse(JSON.stringify(derty));
clone.parents.dad = "Adidas";
console.log(derty);
console.log(clone);
// ------------------------- Промисы
console.log("Запрос данных");

const reg = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Подготовка данных");

    const product = {
      names: "TV",
      price: 2300,
    };

    resolve(product);
  }, 2000);
});

reg.then((product) => {
  // console.log("Данные получены");
  setTimeout(() => {
    product.status = "order";
    // console.log(product);
  }, 2000);
});

reg
  .then((product) => {
    // console.log("Данные получены");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "order";
        resolve(product);
      }, 2000);
    });
  })
  .then((data) => {
    data.modify = "true";
    return data;
  })
  .then((data) => {
    console.log(data);
  });

// reg
//   .then((product) => {
//     // console.log("Данные получены");
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         reject(product);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = "true";
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.error("Ошибка была");
//   });

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => {
//   console.log("1000ms");
// });
// test(2000).then(() => {
//   console.log("2000ms");
// });

Promise.all([test(1000), test(4000)]).then(() => {
  console.log("Вывод");
});

const sertyw = ["Saret", 23, 13, "Deryt", 21];
sertyw.forEach(function (names) {
  console.log(names);
});

// const numbers = ["Saret", "Deryt", "Derytsert"];
// const newnumb = numbers.filter(function (item) {
//   return item.length < 6;
// });

// console.log(newnumb);

const numbers = ["Saret", "Deryt", "Derytsert", 12, 6, 34, 40, 10];
const newnumb = numbers.filter(function (item) {
  return typeof item === "number" && item < 20;
});

console.log(newnumb);
// --------------------
const examplemap = ["SADERTY", "fasertw", "NameLeSS", "sDhjYTRfdFD"];

const newexamplemap = examplemap.map(function (item) {
  return item.toUpperCase();
});

console.log(newexamplemap);
// --------------------

const somes = [23, "fasertw", 10, "sDhjYTRfdFD", 13, 14];

const serty = somes.every((item) => typeof item === "number");

console.log(serty);
// ------------------------------------------------
const redusenew = {
  ivan: "person",
  danil: "person",
  dog: "animal",
  cat: "animal",
};

const numberes = Object.entries(redusenew)
  .filter((item) => item[1] === "person")
  .map((item) => item[0]);
console.log(numberes);

// ------------------------------------------------------------
const arr = [12, 3, 31, 3, 21, 10, 5, 10];

const redusemet = arr.reduce((sum, num) => sum + num, 5);
console.log(redusemet);
// ----------------------

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

function showGoodFilms(arr) {
  return arr.filter((arr) => arr.rating >= 8);
}

const newfilms = showGoodFilms(films);
console.log(newfilms);
// -------------------------------------

const filmse = [
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

function showListOfFilms(arr) {
  const sertyw = arr.map((film) => film.name);
  return sertyw.join(", ");
}

const result = showListOfFilms(filmse);
console.log(result);

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((item) => item.amount > 0)
    .reduce((sert, dert) => sert + dert.amount, 0);
};

const ivaner = getPositiveIncomeAmount(funds);
console.log(ivaner);
// ------------------------

const fundsini = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getTotalIncomeAmount = (data) => {
  return data.some((item) => item.amount < 0)
    ? data.reduce((acc, curr) => acc + curr.amount, 0)
    : getPositiveIncomeAmount(data);
};

const ivanr = getTotalIncomeAmount(fundsini);
console.log(ivanr);

function derstre(data) {
  data.forEach(({ img, altimg, title, descr, price }) => {
    const element = document.createElement("div");
    element.classList.add("menu_item");
    element.innerHTML = ` <img src=${src} alt=${alt}>
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div>`;
  });
  document.querySelector(".menu .container").append(element);
}

// -------------------Регулярные выражения
// Флаги:
// i - хотим чтото найти в не зависимости от регистра
// g - хотим найти сразу несколько вхождений(глобал)
// m - включает многострочный режим, то есть если перенос
// \d - клас поиска цифр
// \w - клас поиска букв и слов
// \s - ищем все пробелы
// \D - клас поиска НЕ цифр
// \W - клас поиска НЕ букв и слов

// const dertyse = prompt("Ты кто вообще по жизни?");

// const gegv = /n/gi;

// console.log(dertyse.search(gegv));
// console.log(dertyse.match(gegv));

// const pass = prompt("Password");
// console.log(pass.replace(/\|/g, "$"));

// console.log("12-23-15".replace(/-/gi, ":"));

// const str = "My name is Puk23e ";

// console.log(str.match(/\w\w\w\d\d\w\ /i));

const sadoverty = {
  names: "Savertyner",
  age: 23,
  address: "Kyiv, Ukraine",

  get uploadSert() {
    return this.address;
  },

  set uploadSert(name) {
    this.address = name;
  },
};

console.log((sadoverty.uploadSert = "Parig France"));

console.log(sadoverty.uploadSert);

// -------Промис
console.log("Запрос отправлен");

const sozdalProm = new Promise(function testfunc(resolve, reject) {
  setTimeout(() => {
    console.log("Подготовка отпарвки данных...");
    const product = {
      names: "Gellac products",
      kolvo: 230,
      data: 2023,
    };
    resolve(product);
  }, 2000);
});

sozdalProm
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "true";
        resolve(product);
        // reject();
      }, 2000);
    });
  })
  .then((data) => {
    data.modify = true;
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("Finally");
  });
// .catch(() => {
//   console.error("Произошла ошибка");
// });

// ------------------------------------------------------------

const testZapis = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

// testZapis(1000).then(() => console.log("Выводим 1000ms"));
// testZapis(2000).then(() => console.log("Выводим 2000ms"));

Promise.all([testZapis(1000), testZapis(4000)]).then(() => {
  console.log("Все норм");
});
// -------------------Инкапсоляция

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.say = function () {
//     console.log(`Его имя ${this.name} и ему ${this.age}`);
//   };
// }

// const ivan = new User("Ivan", 27);
// console.log(ivan.name);
// console.log(ivan.age);

// ivan.name = "Alex";
// ivan.age = 43;

// ivan.say();

//---------------------

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`Его имя ${this.name} и ему ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     this.userAge = age;
//     if (typeof age === "number" && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log("Там лажа с ошибкой");
//     }
//   };
// }

// const ivan = new User("Ivan", 27);
// console.log(ivan.name);
// console.log(ivan.getAge());

// // ivan.name = "Alex";
// ivan.setAge(43);
// ivan.setAge(433);
// console.log(ivan.getAge());

// ivan.say();
// -----------на класах

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.userAge = age;
//   }

//   say() {
//     console.log(`Его имя ${this.name} и ему ${this.userAge}`);
//   }

//   getAge() {
//     return this.userAge;
//   }

//   setAge(age) {
//     this.userAge = age;
//     if (typeof age === "number" && age > 0 && age < 110) {
//       this.userAge = age;
//     } else {
//       console.log("Там лажа с ошибкой");
//     }
//   }
// }

// const ivan = new User("Ivan", 27);
// console.log(ivan.name);
// ivan.userAge = 99;
// console.log(ivan.getAge());

// // // ivan.name = "Alex";
// ivan.setAge(43);
// ivan.setAge(433);
// console.log(ivan.getAge());

// ivan.say();

//-------GET и SET

class User {
  constructor(name, age) {
    this.name = name;
    this.userAge = age;
  }

  // #surname = "Bogdis solom";

  get surn() {
    return this.surname;
  }

  set surn(names) {
    this.surname = names;
  }

  say = () => {
    console.log(`Его имя ${this.name} ${this.surn} и ему ${this.userAge}`);
  };

  get age() {
    return this.userAge;
  }

  set age(age) {
    this.userAge = age;
    if (typeof age === "number" && age > 0 && age < 110) {
      this.userAge = age;
    } else {
      console.log("Там лажа с ошибкой");
    }
  }
}

const ivan = new User("Ivan", 27);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);

ivan.surn = "Соломич Богдан";
console.log(ivan.surn);
ivan.say();

// ---------------КЛАССЫ

class Sertyhana {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  rectahgle() {
    return this.width * this.height;
  }
}

class klassnasled extends Sertyhana {
  constructor(width, height, title, bgcolor) {
    super(width, height);
    this.title = title;
    this.bgcolor = bgcolor;
  }

  newmethodclass() {
    console.log(`Текст ${this.title} и цвет ${this.bgcolor}`);
  }
}

const dannieforclass = new klassnasled(2, 5, "какойто текст", "blue");
dannieforclass.newmethodclass();
console.log(dannieforclass.rectahgle());

// const sambuka = new Sertyhana(5, 3);

// console.log(dannieforclass.rectahgle());

// console.log(sambuka.rectahgle());

// ---------------Конструкторы

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.sertydertymetod = function () {
    console.log(`Его зовут ${this.name}`);
  };
}

User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} вышел`);
};

const alexander = new User("Aleksandr", 12);
const kiril = new User("Kiril", 13);

alexander.exit();

alexander.sertydertymetod();
kiril.sertydertymetod();

console.log(alexander);
console.log(kiril);

// ---------------------
function Userse(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.sertydertymetod = function () {
    console.log(`Его зовут ${this.name} и его ${this.id}`);
  };
}

const alexanderse = new Userse("Aleksandr", 12);
const kirilse = new Userse("Kiril", 13);

alexanderse.sertydertymetod();
kirilse.sertydertymetod();

console.log(alexanderse);
console.log(kirilse);
// ---------------------

const sadertyw = (function () {
  const privat = function () {
    console.log("Приватная функция");
  };

  return {
    testName: privat,
  };
})();

sadertyw.testName();
// -------------------------------
function sertyfert() {
  this.hallo = function () {
    console.log("Hallo");
  };

  this.sadans = function () {
    console.log("sadans");
  };
}

module.exports = sertyfert;
const sertyfert = require(".js/sertyfert");
const newperem = new sertyfert();

newperem.hallo();
newperem.sadans();
