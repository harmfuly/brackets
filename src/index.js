module.exports = function check(str, bracketsConfig) {

  let stack = [];
  let currentSymbol;
  let topSymbol;

  if (str.length % 2 !== 0) return false;

  for (let i = 0; i < str.length; i++) {
    currentSymbol = str[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
      topSymbol = stack[stack.length - 1];

      if (currentSymbol === bracketsConfig[j][1] && topSymbol === bracketsConfig[j][0]) {
        stack.pop();
      } else if (currentSymbol === bracketsConfig[j][0]) {
        stack.push(currentSymbol);
      }
    }
  }
  
  return stack.length === 0;

}
