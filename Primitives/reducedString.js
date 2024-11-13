// Input: "hello world"
// Output: "lohe wrd"
// Explaination: 'l' appears thrice, 'o' appears twice, 'h','e', ' '(space) ,'w','r','d' all appear once
// 'h','e',' ','w','r','d' should be appended in the same order as they appear in the original string  hello world

const reducedString = (input) => {
  const str = input.split("");
  const hm = new Map();
  console.log(str);
  for (let char of str) {
    if (hm.has(char)) {
      hm.set(char, hm.get(char) + 1);
    } else {
      hm.set(char, 1);
    }
  }
  console.log(
    [...hm.entries()]
      .sort((a, b) => b[1] - a[1])
      .map((s) => s[0])
      .join("")
  );

  return [...hm.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((s) => s[0])
    .join("");
};
reducedString("hello world");
