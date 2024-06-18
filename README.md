# js-lab-113
### Lab113 Array: การแก้ไขค่าelement
จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName

```JavaScript
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

updateTask(2, 'Travelling');
console.log(tasks);
// [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Travelling' },
//   { id: 3, name: 'Swimming' }
// ]
```
