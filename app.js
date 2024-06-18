const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

// updateTask(2, 'Travelling');
// console.log(tasks);
// [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Travelling' },
//   { id: 3, name: 'Swimming' }
// ]

function updateTask(id, newName) {
  const element = tasks.find((element) => element.id === id);
  if (element) {
    element.name = newName;
  }
}

updateTask(2, "Travelling");
console.log(tasks);
