function MyString(str) {
  String.call(this, str);
  this.str_ = str;
}
tmp = function () {};
tmp.prototype = String.prototype;
MyString.prototype = new tmp();
MyString.prototype.constructor = MyString;

MyString.prototype.removeSpecialCharacters = function () {
  return this.replace(/[^a-zA-Z ]/g, "");
};
// override;
MyString.prototype.toString = function () {
  return this.str_;
};
MyString.prototype.valueOf = function () {
  return this.str_;
};

const str = new MyString("HE8909LL77%^OO");

console.log(str.removeSpecialCharacters());
