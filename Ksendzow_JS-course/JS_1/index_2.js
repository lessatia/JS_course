// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.*/
let age_2 = 18;
let age_3 = 60;
const checkAgeType = function (age) {
  if (typeof age != "number") {
    console.log("type error");
  } else if (age < age_2) {
    console.log("You don’ t have access cause your age is " + "your age = " + age + " It’ s less then we need");
  } else if (age >= age_2) {
    if (age > age_3) { 
      console.log("your age = " + age + " Keep calm and look Culture channel");
    } else console.log("your age = " + age + " Welcome!");
  } else {
    console.log("Technical work");
  }
};
checkAgeType("sdfvg");
checkAgeType(true); 
checkAgeType(34);
