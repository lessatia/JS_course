const arr = [
  "«НПП Призвище Кил-ты Примерно»",
  "«______________________ in_ base_Ukrainian»",
  "«0-rt-rgfr»",
  "«8484fjdfkf»",
  "«МИЛЛЕР»",
  "«ШЕВЧЕНКО»",
  "«БОЙКО»",
  "«КОВАЛОНДАНКО»",
  "«БОЙКО» «ТКАЧЕНКО»",
  "«КОВАЛЬЧУК»",
  "«КРАВЧЕНКО»",
  "«ОЛИИНИК»",
];

const rightNameCheck = function () {
  arr.splice(0, 4);
};
rightNameCheck();
console.log(arr);
