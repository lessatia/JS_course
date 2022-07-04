class Zoo {
  constructor(name, address, area, establishedDate, ticketPrice) {
    this._name = name;
    this._address = address;
    this._area = area;
    this._establishedDate = establishedDate;
    this._ticketPrice = ticketPrice;
  }
  get name() {
    return this._name;
  }
  get address() {
    return this._address;
  }
  get area() {
    return this._area;
  }
  get establishedDate() {
    return this._establishedDate;
  }
  get ticketPrice() {
    return this._ticketPrice;
  }
  set establishedDate(value) {
    if (typeof value === "number") {
      this._establishedDate = value;
    } else {
      console.log("Invalid input: establishedDate must be set to a Number.");
    }
  }
}

class Animal {
  constructor(type, color, weight, height, placeOfOrigin) {
    this._type = type;
    this._color = color;
    this._weight = weight;
    this._height = height;
    this._placeOfOrigin = placeOfOrigin;
  }
  get type() {
    return this._type;
  }
  get color() {
    return this._color;
  }
  get weight() {
    return this._weight;
  }
  get height() {
    return this._height;
  }
  get placeOfOrigin() {
    return this._placeOfOrigin;
  }
}

class Snakes extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
    super(type, color, weight, height, placeOfOrigin);
    this._isPoisonous = isPoisonous;
  }
  get isPoisonous() {
    return this._isPoisonous;
  }
}

class CatLike extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isSafeToPet) {
    super(type, color, weight, height, placeOfOrigin);
    this._isSafeToPet = isSafeToPet;
  }
  get isSafeToPet() {
    return this._isSafeToPet;
  }
}
class Birds extends Animal {
  constructor(type, color, weight, height, placeOfOrigin, isFlying) {
    super(type, color, weight, height, placeOfOrigin);
    this._isFlying = isFlying;
  }
  get isFlying() {
    return this._isFlying;
  }
}
class Worker {
  constructor(FirstName, LastName, phone) {
    this._FirstName = FirstName;
    this._LastName = LastName;
    this._phone = phone;
  }
  get FirstName() {
    return this._FirstName;
  }
  get LastName() {
    return this._LastName;
  }
  get phone() {
    return this._phone;
  }
  set phone(value) {
    if (typeof value === "number") {
      this._phone = value;
    } else {
      console.log("Invalid input: phone must be set to a Number.");
    }
  }
}

const animals = [
  new Snakes("phyton", "yellow", "12 kg", "0.2 m", "Brazil", "not poisonous"),
  new Snakes("wiper", "green", "0.4 kg", "0.1 m", "Europ", "is poisonous"),
  new CatLike("tiger", "orange-black", "30 kg", "1 m", "India", "dangerous"),
  new CatLike("lion", "yellow", "70 kg", "1,5 m", "Afriсa", "dangerous"),
  new Birds(
    "penguin",
    "white-black",
    "90 kg",
    "1,8 m",
    "Antarctica",
    "not flying"
  ),
  new Birds("eagle", "brown", "8 kg", "0.4 m", "Canada", "is flying"),
];

animals.splice(3, 2);
let totul = animals.push(
  new Birds("cockatoo", "rainbow", "2 kg", "0.3 m", "New Zealand", "is flying")
);
console.log("осталось " + totul + " животных");

const workers = [
  new Worker("Mikle", "Jakson", 80171589089),
  new Worker("Emma", "Stown", 80293332255),
  new Worker("Daniel", "Craig", 80293332255),
];

workers.splice(2, 1);
let total = workers.push(
  new Worker("Abraham", "Linkoln", 80171111111),
  new Worker("Nil", "Armstrong", 80172222222)
);
console.log("теперь " + total + " работника");

const myZoo = new Zoo(
  "Minsk's Zoo",
  "Taschentskaya street 40",
  "0,15km2",
  1984,
  "15 BYN"
);
let quickFacts = function () {
  console.log(
    `${myZoo.name} is created in ${myZoo.establishedDate}, it occupies the area of ${myZoo.area}, it's address is ${myZoo.address}.`
  );
};
quickFacts();
const myAnimal = new Animal(
  "Vertebretes",
  "white",
  "15 kg",
  "0.5 m",
  "Brasilia"
);
const myWorker = new Worker("Ivan", "Ivanov", 80290000000);

function listShowAnimals() {
  for (i = 0; i < animals.length; i = i + 1) {
    let animal = animals[i];
    console.log(animal.type + "- экземпляр подкласса:");
    console.log(animal);
  }
}
listShowAnimals();

console.log(
  "Animal " + animals[3].type + " has a height of " + animals[3].height
);
console.log(animals[2]);

function listShowWorker() {
  for (i = 0; i < workers.length; i = i + 1) {
    let worker = workers[i];
    console.log(worker.LastName + "- полная информация:");
    console.log(worker);
  }
}
listShowWorker();
