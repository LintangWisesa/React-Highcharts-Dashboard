var data = [
    { 'day': 1, 'animal': 'Dog', 'meat': 5 },
    { 'day': 1, 'animal': 'Dog', 'meat': 5 },
    { 'day': 2, 'animal': 'Dog', 'meat': 5 },
    { 'day': 1, 'animal': 'Cat', 'meat': 1 },
    { 'day': 2, 'animal': 'Cat', 'meat': 1 },
    { 'day': 2, 'animal': 'Cat', 'meat': 1 }
]

var r = {};
data.forEach(function(o){
  r[o.day + '|' + o.animal] = (r[o.day + '|' + o.animal] || 0) + o.meat;
})
console.log(r)

var result = Object.keys(r).map(function(k){
  return { day: k.split('|')[0], animal: k.split('|')[1], meat: r[k] }
});
console.log(result)