let a = {
  name: "I love js",
};

function changeObject(v = { ...a }) {
  console.log(v);
}
changeObject(null); // null beacuse through null we can explicitly set v as null
changeObject(undefined); // { name: 'I love js' } but through undefined we can't

//   null then a object, beacuse through null we can explicitly set v as null but through undefined we can't.
