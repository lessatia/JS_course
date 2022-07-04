const lodash = require("lodash");
const list = require("./data2.json");

for (let i = 0; i < list.length; i++) {
  const result = [];
  list.filter((person, index) => {
    if (lodash.isEqual(person, list[i])) {
      result.push(index);
    }
    if (index == list.length - 1 && result.length > 1) {
      list.splice(i, 1);
    }
  });
}
console.log(list);
console.log(list.length);
