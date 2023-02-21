function isPalindrome(para) {
  const strArr = Array.from(para);
  const strArrRevert = [...strArr].reverse();
  const result = strArr.join() === strArrRevert.join();

  console.debug(para, " is ", result ? "" : "not", " palindrome");

  return result;
}
