let counter = 0;
const vovelsCounter = (str) => {
  const vovels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  // примерно половина источников считает Yy как тоже гласную следовало бы учесть и ее, особенно если она дает отдельный слог в слове directory

  for (letter of str) {
    if (vovels.includes(letter)) {
      counter = counter + 1;
    }
  }
  return counter;
};
vovelsCounter("The current directory is AD-123");
console.log(counter);
