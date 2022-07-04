const PinLength = 5;
pinCodeGenerator = function () {
  return Math.floor(Math.random() * 10 ** PinLength);
};
console.log(pinCodeGenerator());
