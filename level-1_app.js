//LEVEL 1
//LEVEL 1
//LEVEL 1
//LEVEL 1
//LEVEL 1
let emptyArray = [];

const arraywmore5elements = ['sincab', 'tozsoran', 'Rafiq', 'metre', 'sinan', 'sayğac', 'siçan'];

console.log(arraywmore5elements.length);



function firstlastItem() {
    let first = arraywmore5elements[0];

    let last = arraywmore5elements[arraywmore5elements.length - 1];

    let middle = arraywmore5elements[3]

    console.log(first);
    console.log(last);
    console.log(middle);
}
firstlastItem();

const mixedDataTypes = [true,false,'ronaldo','televizor','quokka',10,7,41,52];

console.log(mixedDataTypes.length);

const  itCompanies = ['Facebook','Google','Microsoft','Apple', 'IBM','Oracle', 'Amazon'];

console.log(itCompanies);

let numnberOfCompanies = itCompanies.length;

console.log(numnberOfCompanies);

function firstlastItemCompanies() {
    let first = itCompanies[0];

    let last = itCompanies[itCompanies.length - 1];

    let middle = itCompanies[3]

    console.log(first);
    console.log(last);
    console.log(middle);
}
firstlastItemCompanies();

console.log(itCompanies[0]);

console.log(itCompanies[1]);

console.log(itCompanies[2]);

console.log(itCompanies[3]);

console.log(itCompanies[4]);

console.log(itCompanies[5]);

console.log(itCompanies[6]);

const itCompaniesUpperCase = itCompanies.map(itCompanies => itCompanies.toUpperCase());

console.log(itCompaniesUpperCase);

itCompaniesSentence = itCompanies.toString();

console.log(itCompaniesSentence);

if (itCompanies.includes('Huawei')) {
    console.log('Huawei')
}
else{
    console.log('a company is not found');
}
if (itCompanies.includes('Facebook')) {
    console.log('Facebook')
}
else{
    console.log('a company is not found');
}
    
let sortedItCompanies = itCompanies.sort()

console.log(sortedItCompanies);

let reversedItCompanies = itCompanies.reverse();

console.log(reversedItCompanies)

const first_three_companies = itCompanies.slice(0,3)

console.log(first_three_companies);

const last_three_companies = itCompanies.slice(4,7)

console.log(last_three_companies);

let middleIndex = Math.floor(itCompanies.length / 2);

let slice_middle = itCompanies[middleIndex]

console.log(slice_middle);

let removedItCompanies = itCompanies.shift();

console.log(itCompanies);

let MidlleRemovedItCompanies = itCompanies.splice(middleIndex,1)

console.log(itCompanies);

itCompanies.pop();

console.log(itCompanies);

itCompanies.length = 0;

console.log(itCompanies);

//LEVEL 1
//LEVEL 1
//LEVEL 1
//LEVEL 1
//LEVEL 1







