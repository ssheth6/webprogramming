const fs = require('fs');

let textMetrics = exports = module.exports;

textMetrics.createMetrics = (data) => 
{
    return new Promise((fulfill, reject) => 
    {
        if (!data) reject("No file path provided!");
        
        var filteredText = data.replace(/[^\w\s]|_/g,"").replace(";","").replace(/\s+/g,"|").split("|")
        filteredText = filteredText.filter(String);

        
        //totalLetters
        let totalLetters=0;
        for(let i = 0; i < filteredText.length; i++)
        {
            let letter = filteredText[i];
            for(let j = 0; j < letter.length; j++)
            {
               if(isLetter(letter[j]))
               {
                   totalLetters = totalLetters + 1;
               }
            }
        }

        function isLetter(s)
        {
            return /^[a-zA-Z]+$/.test(s);
        }


        //totalWords
        var totalWords = filteredText.length;
        

        //uniqueWords
        var uniqueWords = new Set();
        for(let i = 0; i < filteredText.length; i++)
        {
            uniqueWords.add(filteredText[i].toLowerCase());
        }


        //longWords
        var longWords = 0;
        for( i = 0; i < filteredText.length; i++)
        {
            if(filteredText[i].length >= 6)
	        longWords = longWords + 1; 
        }


        //averageWordLength
        var averageWordLength = (totalLetters / filteredText.length).toFixed(2);


        //textComplexity
        var sentenceFromText = data.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
        var textComplexity = (totalWords / sentenceFromText.length + (longWords * 100) / totalWords).toFixed(2);


        //wordOccurrences
        wordOccurrences={};
        for(let i=0; i < filteredText.length; i++)
        {
            val = filteredText[i].toLowerCase();
            if(wordOccurrences[val] == undefined) 
            {
                wordOccurrences[val] = 1
            }
            else
            {
                wordOccurrences[val]=+1;
            }
        }

        fulfill({totalLetters:totalLetters, totalWords:totalWords, uniqueWords:uniqueWords.size, longWords:longWords,
      averageWordLength:averageWordLength, textComplexity:textComplexity, wordOccurrences:wordOccurrences});
    })
};