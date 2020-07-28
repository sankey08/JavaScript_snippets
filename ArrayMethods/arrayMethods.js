const items = [
    {name:'vadapav', price:12},
    {name:'tea', price:10},
    {name:'MISAL',price:50},
    {name:'poha', price:20},
    {name:'friedrice',price:60},
    {name:'Idlivada',price:40}
];

// Filter method returns boolean values based on the condition and inserts into new array
const filteredItems = items.filter((item)=> {
    return item.price <= 40;
})
console.log(filteredItems);

//Map method creates a new array with the results of calling a provided function on every element in the calling array.
const itemName = items.map((item)=>{
    return item.name;
})
console.log(itemName);

//Find method for searching over specific value
const findItem =  items.find((item)=>{
    return item.name === 'MISAL';
})
console.log(findItem);

//forEach for iterating every element
items.forEach((item)=>{
    console.log(item.name);
})

//some will check whether any/one item meets the condition and return the boolena value
const anyItem = items.some((item)=>{
    return item.price > 30;
})
console.log(anyItem);

//reduce method performs function on each of the element of array and results in single output value.
const totalPrice = items.reduce((currentVal, item)=>{
    return item.price + currentVal;
},0);
console.log(totalPrice);

/*

OUTPUT:
[
  { name: 'vadapav', price: 12 },
  { name: 'tea', price: 10 },    
  { name: 'poha', price: 20 },   
  { name: 'Idlivada', price: 40 }
]
[ 'vadapav', 'tea', 'MISAL', 'poha', 'friedrice', 'Idlivada' ]
{ name: 'MISAL', price: 50 }
vadapav
tea
MISAL
poha
friedrice
Idlivada
true
192

*/
