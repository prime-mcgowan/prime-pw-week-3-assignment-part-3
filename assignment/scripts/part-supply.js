console.log('****** Part Supply *******');
// REQUIRED FEATURES

//Test
console.log('js');

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');

let partsNeeded = 40;
console.log(partsNeeded);


// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');

let supplyChanges = [ 3, 5, -6, 0, 7, 11 ];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');

console.log( supplyChanges [2]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');

let removedChanges = supplyChanges.pop();
console.log('removed change', removedChanges);

console.log(supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');

supplyChanges.push(25);
console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

for (let i=0; i < supplyChanges.length; i++) {
    console.log(supplyChanges[i]);
if( supplyChanges[i] > 0) {
    console.log('Added');
} else if (supplyChanges[i] === 0)
    console.log('No change');
 else if (supplyChanges[i] < 0) {
    console.log('Removed');
 }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

for(number of supplyChanges) {
    console.log('for of', number);
    if(number > 0) {
        console.log('Added');
    } else if (number === 0) {
        console.log('No change');
    } else if (number < 0){
        console.log('Removed');
    }
}


// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

//I did Google how to do this (educative.io)

//Not quite sure about function - but its JS definition is to calculate a value (in this instance).
//We set the sum to zero (our starting point).
//Index is set to zero
//As long as 0 is less than the supplyChanges array (5) then it will continue to run through the numbers
//sum += supplyChanges is asking the computer to add the array numbers together and return a total



    function sumsupplyChanges(supplyChanges){
    supplyChanges = [ 3, 5, -6, 0, 7, 11 ];   
    let sum = 0;
    for(let i = 0; i < supplyChanges.length; i += 1){
        sum += supplyChanges[i]
    }
    return sum;
}
console.log(sumsupplyChanges([3, 5, -6, 0, 7, 11 ]));
   



// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

//I REALLY tried but couldn't get this one.
//Below are some attempts but they are not correct
//This problem hit a weak spot of mine...I've never been good with these types of problems...but I gave it a shot and 
//I know that I just have to keep trying and my mind will/can work these types of problems out. 


let index = 0;
const max = 572;

while(index < 572) {
    console.log('box filled', index);
    index +=7;
}

/*
let partsBoxed = 567;
while(partsBoxed === 567) {
    console.log('number of boxes used', partsBoxed);
    partsBoxed /=7;
}
*/



let boxes = Math.trunc(572 / 7);
    console.log('number of boxes filled', boxes);




//Below is what some of my classmates worked out and Farah walked me through it

//part = total number of parts
//boxes = 0 because no boxes have been packed yet
//the While Statement is saying...keep looping through 572 until it hits 6 (because then there aren't enough parts to pack a box).
//everytime it loops it should subtract 7
//!! I was looking at the problem as starting at 0 parts and working your way up to 572

    let part = 572;
    boxes = 0;

    while (part > 6) {
        part -= 7;
        boxes++;
    }

    console.log('Parts unboxed', part, 'Boxes filled', boxes);




   