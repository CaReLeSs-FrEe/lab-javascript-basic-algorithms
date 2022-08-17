// Iteration 1: Names and Input

let driverName;
let navigatorName;
 
driverName = 'bob'
navigatorName = 'jimmy'

let hacker1 = driverName;
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = navigatorName;
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
let len1 = driverName.length;
let len2 = navigatorName.length;
let i = driverName.length
let j = navigatorName.length 

 if(len1 < len2) {
    console.log(`It seems that the navigator has the longest name, it has ${j} characters.`)
 } else if(len1 > len2) {
    console.log(`the driver has the longest name, it has ${i} characters.`)
 } else if(len1 == len2) {
    console.log(`wow, you both have equally long names, ${i} characters.`)
 }

if(hacker1) {
    console.log(`Driver:` + ' ' + hacker1 + ', ' + `Ready!`);
} else {
        console.log(`Can't go anywhere without a driver!.`);
}

if(hacker2) {
    console.log(`Navigator:` + ' ' + hacker2 + ', ' + `Let's Go!`);
 } else {
        console.log(`Can't navigate without a navigator!`);
}

if (!hacker1 && !hacker2) {
    console.log(`No Crew! Disqualified!`);
}  else if(!hacker1 || !hacker2) {
    console.log('Not Ready!')
} else {
    console.log(`Ready!`)
}
    
// Iteration 3: Loops

let result = driverName.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(result);

function reverseString(navigatorName) {
    return navigatorName.split("").reverse().join("");
}
console.log(reverseString(navigatorName));

let names = [driverName, navigatorName]
names.sort();
if(names.indexOf > names.lastIndexOf) {
    console.log(`the driver's name goes first.`)
} else if(names.indexOf < names.lastIndexOf)  {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}