//Function 1 Calculate the sum of the squares of 3 numbers and return that result
function sumOfSquares(num1, num2, num3)
{
    if(typeof num1 !== "number" || num1 === undefined)
    {
        throw "num1 is not a number.";
    }
    if(typeof num2 !== "number" || num2 === undefined)
    {
        throw "num2 is not a number.";
    }
    if(typeof num3 !== "number" || num3 === undefined)
    {
        throw "num3 is not a number.";
    }
    console.log(Math.pow(num1, 2) + Math.pow(num2, 2) + Math.pow(num3, 2));
    
}


//Function 2 Make a simple function that uses console.log to print hello to someone!
function sayHelloTo(firstName, lastName, title)
{
    if(typeof firstName === "string" && typeof lastName === "string" && typeof title === "string")
    {
        console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);
    }
    else if(typeof firstName === "string" && typeof lastName === "string" && !title)
    {
        console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
    }
    else if(typeof firstName === "string" && !lastName && !title)
    {
        console.log(`Hello, ${firstName}!`);
    }
    else
    {
        throw "firstName, lastName and title are not defined correctly.";
    }
}


//Function 3 create and return a simple song called 99 Cups of Coffee on the Desk
function cupsOfCoffee(howManyCups)
{
    if(typeof howManyCups !== "number" || howManyCups % 1 !== 0 || howManyCups === undefined || howManyCups <=0)
    {
        throw "howManyCups is not a positive integer.";
    }
    for(let i=howManyCups; i>0; i--)
    {
        if(i === 1)
        {
            console.log(`${i} cup of coffee on the desk! ${i} cup of coffee!`);
            console.log("Pick it up, drink the cup, no more coffee left on the desk!");
        }
        else if(i === 2)
        {
            console.log(`${i} cups of coffee on the desk! ${i} cups of coffee!`);
            console.log(`Pick one up, drink the cup, ${i-1} cup of coffee on the desk!`);
        }
        else
        {
            console.log(`${i} cups of coffee on the desk! ${i} cups of coffee!`);
            console.log(`Pick one up, drink the cup, ${i-1} cups of coffee on the desk!`);
        }
    }
}


//Function 4 calculate how many times a substring occurs in a given string
function occurrencesOfSubstring(fullString, substring)
{
    if(fullString === undefined || typeof fullString !== "string")
    {
        throw "fullString is not a string.";
    }
    if(substring === undefined || typeof substring !== "string")
    {
        throw "substring is not a string.";
    }
    if (substring.length <= 0)
    {
        throw "substring parameter required";
    }

    var i = 0, position = 0, step = 1;

    while (true) 
    {
        position = fullString.indexOf(substring, position);
        if (position >= 0) 
        {
            ++i;
            position += step;
        } 
        else 
        {
            break;
        }
    }
    console.log(i);
}


//Function 5 take in a paragraph and randomize the sentences in it.
function randomizeSentences(paragraph)
{
    if(paragraph === undefined || typeof paragraph !== "string")
    {
        throw "paragraph is not a string.";
    }
    var splitTheParagraphArray = paragraph.split(/[.!?]+/);
    for(var i = splitTheParagraphArray.length-1; i >= 0; i--)
    {
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var valueAtIndex = splitTheParagraphArray[randomIndex];
        splitTheParagraphArray[randomIndex] = splitTheParagraphArray[i]; 
        splitTheParagraphArray[i] = valueAtIndex;
    }
    splitTheParagraphArray.forEach((value) => {
            console.log(value);
    });
}


sumOfSquares(5, 3, 10); //prints the desired result
sayHelloTo("Sneha"); //prints the desired result
sayHelloTo("Sneha", "Sheth"); //prints the desired result
sayHelloTo("Sneha", "Sheth", "Ms."); //prints the desired result
cupsOfCoffee(5); //prints the desired result
occurrencesOfSubstring("hello world", "o"); //prints the desired result
occurrencesOfSubstring("Helllllllo, class!", "ll"); //prints the desired result
var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";
randomizeSentences(paragraph); //prints the desired result