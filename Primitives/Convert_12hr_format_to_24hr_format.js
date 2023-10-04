// . Write a function which can convert the time input given in 12 hours format to 24 hours format

function convertTo24HrsFormat(time) {
  let timeToLower = time.toLowerCase();
  let [hrs, min] = timeToLower.split(":");

  if (timeToLower.endsWith("am")) {
    hrs = hrs == 12 ? "0" : hrs;
  } else if (timeToLower.endsWith("pm")) {
    hrs = hrs == 12 ? hrs : String(+hrs + 12);
  }
  //   console.log(hrs);
    return hrs.padStart(2, 0) + ":" + min.slice(0, -2).padStart(2, 0);
//   return `${hrs}:${min.slice(0, -2)}`;
}
console.log(convertTo24HrsFormat("12:10AM")); // 00:10
console.log(convertTo24HrsFormat("5:00AM")); // 05:00
console.log(convertTo24HrsFormat("12:33PM")); // 12:33
console.log(convertTo24HrsFormat("01:59PM")); // 13:59
console.log(convertTo24HrsFormat("11:8PM")); // 23:08
console.log(convertTo24HrsFormat("10:02PM")); // 22:02
