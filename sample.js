// function checkoddoreven(num){
// if(num%2==0)
// { num++;
//     console.log("num is even so converted to odd",num);
// }
// else
// {
//     console.log("num is odd",num);
// }

// }
// //checkoddoreven(4);
// //checkoddoreven(7);
// checkoddoreven(18);
// checkoddoreven(15);


// function checkAndConvert(num1, num2) {
//     // Calculate the sum of the two numbers
//     let sum = num1 + num2;
    
//     // Check if the sum is even or odd
//     if (sum % 2 === 0) {
//         // If sum is even, convert it to an odd number by adding 1
//         sum += 1;
//         console.log("The sum is even. Converted sum to an odd number:", sum);
//     } else {
//         // If sum is odd, simply print it
//         console.log("The sum is odd:", sum);
//     }
// }

// // Example usage
// checkAndConvert(3, 5); // Output: The sum is even: 8..Converted sum to an odd number :9
// checkAndConvert(2, 4); // Output: The sum is even. Converted sum to an odd number: 7
// checkAndConvert(1,2); // Output : The sum is odd .simply print the odd number without converting 


//1 Question--------------------------------->>>>
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// Take both even and odd number to filter only even number:--
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = filterEvenNumbers(numbersArray);
console.log(evenNumbersArray); // Output: [2, 4, 6, 8, 10]



//2 Question---------------------------------->>>>
//Using map() method-->
const strings=["A","B","C"];
const objectsUsingMap=strings.map(str=>({name:str}));
console.log("Using map():",objectsUsingMap);

//Using reduce() method--> 
const objectsUsingReduce=strings.reduce((acc,str) =>{acc.push({name:str});
return acc;
},[]);
console.log("Using reduce():",objectsUsingReduce);

//Using filter() method-->
const objectsUsingFilter=strings.filter(str =>str !=="").map(str => ({name:str}));
console.log("Using filter():",objectsUsingFilter);



//3 Question----------------------------------->>>>
const myObject={a:17, b:21, c:300};

function giveObjectValues(obj){
    return Object.keys(obj).map(key =>obj[key]);
}
const arrayValues=giveObjectValues(myObject);
console.log(arrayValues);

//4 Question---------------------------------->>>>
 function reverseString(str){
    return str. split('').reverse().join('');
 } 
 const originalString="Hello,World";
 const reversedString=reverseString(originalString);
 console.log(reversedString);


 //5 Question--------------------------------->>>>
 function countWordOccurrences(sentence, word) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");
    
    // Initialize a variable to store the count of occurrences
    let count = 0;
    
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Check if the current word matches the word we're looking for
        if (words[i].toLowerCase() === word.toLowerCase()) {
            // If it matches, increment the count
            count++;
        }
    }
    
    // Return the count of occurrences
    return count;
}

// Example usage:
const sentence = "My first name is Shreyansh. My last name is Agarwal.";
const word = "My";
const occurrences = countWordOccurrences(sentence, word);
console.log(`The word "${word}" occurs ${occurrences} times in the sentence.`);


//6 Question--------------------------------------->>>>
function giveNameAgeObject(people) {
    const nameAgeObject = {};
    
    for (const person of people) {
      nameAgeObject[person.name] = person.age;
    }
    
    return nameAgeObject;
  }
  
  // Example usage:
  const people = [
    { name: 'Ram', age: 21 },
    { name: 'Shyam', age: 22 },
  ];
  
  const nameAgeMap = giveNameAgeObject(people);
  console.log(nameAgeMap);  //Qutput:Ram: 21, Shyam: 22}Ram: 21Shyam: 22[[Prototype]]: Object

  

//7 Question-------------------------------------->>>>
function sumOfPositiveNumbers(arr) {
    let total = 0;
    for (let num of arr) {
        if (num > 0) {
            total += num;
        }
    }
    return total;
}
 
let nums=[-5,-4,1,2,-3,-2,3,4,-1,0,0,5];
console.log(sumOfPositiveNumbers(nums));  //Output: 15


//8 Question--------------------------------------->>>>
function reverseArray(arr) {
    let newArr = arr.slice();
    newArr.reverse();  
    return newArr;
  }
  
  // Example usage:
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = reverseArray(originalArray);
  
  console.log("Original array:", originalArray); // Output: Original array: [1, 2, 3, 4, 5]
  console.log("Reversed array:", reversedArray); // Output: Reversed array: [5, 4, 3, 2, 1]
  

  //9 Question------------------------------------->>>>
  function findSameElements(arr1, arr2) {
   
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    
   
    let sameElements = [];
    
   
    for (let elem of set1) {
        
        if (set2.has(elem)) {
            sameElements.push(elem);
        }
    }
    
    return sameElements;
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
console.log(findSameElements(arr1, arr2)); // Output: [4, 5]

//10 Question---------------------------------------->>>>

function highestPaidName(employees) {
    if (employees.length === 0) {
        return "No employees found";
    }

    let highestSalary = employees[0].salary;
    let highestPaidNames = [employees[0].name];

    for (let i = 1; i < employees.length; i++) {
        const currentEmployee = employees[i];
        
        for (let key in currentEmployee) {
            if (key === 'salary') {
                const currentSalary = currentEmployee[key];
                const currentName = currentEmployee.name;
                
                if (currentSalary > highestSalary) {
                    highestSalary = currentSalary;
                    highestPaidNames = [currentName];
                } else if (currentSalary === highestSalary) {
                    highestPaidNames.push(currentName);
                }
            }
        }
    }

    return highestPaidNames;
}

const employees = [
    { name: "Dholu", salary: 50000 },
    { name: "Raju", salary: 60000 },
    { name: "Bheem", salary: 80000 },
    { name: "Kalia", salary: 55000 }
];

console.log(highestPaidName(employees)); // Output: ["Raju", "Bheem"]
