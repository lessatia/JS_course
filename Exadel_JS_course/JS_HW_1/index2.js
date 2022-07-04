const validatePhoneNumber = "9748 759 989";
const lines = validatePhoneNumber.split(" ").join("");
const reg = new RegExp("^\\d+$");
console.log(lines);
console.log(lines.length + "-значный " + reg.test(lines) + " phone number");
