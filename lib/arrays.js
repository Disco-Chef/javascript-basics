const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const months = monthString.split(",");
months.length;

// console.log(months);

// CRUD

const fruits = [];

// Create
fruits.push('apple');
fruits.push('pineapple');

// Read
fruits[0];

// Update
fruits[0] = 'Banana';

// Delete
fruits.splice(0, 1);
// Delete 1 element starting from index 0

const beatles = ["paul", "john", "ringo", "george"];
beatles.forEach((beatle) => {
  console.log(beatle);
});
