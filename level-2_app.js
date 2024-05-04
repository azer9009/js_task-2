// LEVEL 2
// LEVEL 2
// LEVEL 2
// LEVEL 2




let webTechs = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python'

let words = webTechs.split(",")

console.log(words)

console.log(words.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")

shoppingCart.push("Sugar")

// I AM NOT ALLERGIC TO HONEYYY!!!!! 


console.log(shoppingCart);

const index = 3;

const modifiedTea = 'Green Tea'

shoppingCart[index] = modifiedTea;

console.log(shoppingCart);

let seperate_countries = ['Azerbaijan','Qazaxistan', 'Afqanistan', 'Rusya','America'];

if (seperate_countries.includes('Ethiopia')) {
    
console.log('ETHIOPIA');
}
 else{
    seperate_countries.push('Ethiopia')
}
console.log(seperate_countries);



if (webTechs.includes('Sass')) {

    console.log('Sass is a CSS preprocess');

}
else{
   webTechs = [webTechs + ' , Sass']
}

console.log(webTechs);


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat('', backEnd);

console.log(fullStack);

// LEVEL 2
// LEVEL 2
// LEVEL 2
// LEVEL 2
