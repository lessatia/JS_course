let counter = 0;
let newM = [];

const vovelsCounter = (str) => {
  const vovels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  // примерно половина источников считает Yy как тоже гласную следовало бы учесть и ее, особенно если она дает отдельный слог в слове directory

  for (letter of str) {
    if (!vovels.includes(letter)) {
      newM.push(letter);
    }
  }
  return newM;
};
vovelsCounter("The current directory is AD-123");
console.log(newM.join(""));
