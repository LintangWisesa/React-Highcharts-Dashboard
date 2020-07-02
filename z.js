// sort
// var data = [
//     { 'day': 1, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 1, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 2, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 1, 'animal': 'Cat', 'meat': 1 },
//     { 'day': 2, 'animal': 'Cat', 'meat': 1 },
//     { 'day': 2, 'animal': 'Cat', 'meat': 1 }
// ]

// data.sort((x,y) => (x.day > y.day) ? 1 : -1 )
// console.log(data)

// ======================================
// Merger & sum data

// var data = [
//     { 'day': 1, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 1, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 2, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 1, 'animal': 'Cat', 'meat': 1 },
//     { 'day': 2, 'animal': 'Cat', 'meat': 1 },
//     { 'day': 2, 'animal': 'Cat', 'meat': 1 }
// ]

// var r = {};
// data.forEach(function(o){
//   r[o.day + '|' + o.animal] = (r[o.day + '|' + o.animal] || 0) + o.meat;
// })
// console.log(r)

// var result = Object.keys(r).map(function(k){
//   return { day: k.split('|')[0], animal: k.split('|')[1], meat: r[k] }
// });
// console.log(result)


// ======================================
// Array of objects => array

// var data = [
//     { 'day': 1, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 1, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 2, 'animal': 'Dog', 'meat': 5 },
//     { 'day': 1, 'animal': 'Cat', 'meat': 1 },
//     { 'day': 2, 'animal': 'Cat', 'meat': 1 },
//     { 'day': 2, 'animal': 'Cat', 'meat': 1 }
// ]
// var finalArray = data.map((i) => {
//     return i.day;
// });
// finalArray = new Set(finalArray)
// finalArray = [...finalArray]
// console.log(finalArray)


// =====================================

// var array = [
//     {name: "foo1", value: "val1", 'Dog': 1}, 
//     {name: "foo1", value: ["val2", "val3"], 'Cat':1}, 
//     {name: "foo2", value: "val4", 'Dog': 1},
//     {name: "foo2", value: "val99", 'Cat': 1}
// ];
  
// var output = [];
  
// array.forEach((item) => {
//     var existing = output.filter(function(v, i) {
//       return v.name == item.name;
//     });
//     if (existing.length) {
//       var existingIndex = output.indexOf(existing[0]);
//       output[existingIndex].value = output[existingIndex].value.concat(item.value);
//     } else {
//     if (typeof item.value == 'string')
//         item.value = [item.value];
//     output.push(item);
//     }
// });
  
// console.dir(output);

// ============================
// OK

// array = [
//     {'nama': '1', 'usia': 21}, {'nama': '1', 'cat': 22}, {'nama': '1', 'dog': 23},
//     {'nama': '2', 'haha': 21}, {'nama': '2', 'huhu': 23}, {'nama': '3', 'k': 24},
// ]

// var seen = {};
// for (var i = 0; i < array.length; i++) {
//     var cur = array[i];
//     if (cur.nama in seen) {
//         var seen_cur = seen[cur.nama];
//         // console.log(Object.keys(cur))
//         for (j=0; j<Object.keys(cur).length; j++){
//             seen_cur[Object.keys(cur)[j]] = cur[Object.keys(cur)[j]]
//         }
//     } else {
//         seen[cur.nama] = cur;
//     }
// }
// console.log(seen)

// var arr = [];
// for (var k in seen) {
//     arr.push(seen[k]);
// }

// console.log(arr)


// =================================

data = [
    {'id': 1, 'nama': 'Andi', 'usia': 20},
    {'id': 2, 'nama': 'Budi'},
    {'id': 3, 'nama': 'Caca', 'usia': 21},
    {'id': 4, 'nama': 'Deni', 'usia': 22},
    {'id': 5, 'nama': 'Euis'},
]

data.forEach((i)=>{
  if (!("usia" in i)){
      i['usia'] = 0
  }  
})
console.log(data)