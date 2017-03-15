const fileData = require("./fileData");
const textMetrics = require("./textMetrics");


//This method will, when given a path, return a promise that resolves to a string with the contents of the files.
setTimeout(function()
{
    let getFileResultAsString = fileData.getFileAsString("sample_filedata.json");

    getFileResultAsString.then((fileResultString) => 
    {
        console.log(fileResultString);
        console.log("Type of result:");
        console.log(typeof fileResultString);
    })
    .catch((error) => 
    {
        console.error("There was an error parsing the original file!");
        console.error(error);
        return;
    });
},100);


//This method will, when given a path, return a promise that resolves to a JavaScript object.
setTimeout(function()
{
    let getFileResultAsJSON = fileData.getFileAsJSON("sample_filedata.json");

    getFileResultAsJSON.then((fileResultJSON) => 
    {
        console.log(fileResultJSON);
        console.log("Type of result:");
        console.log(typeof fileResultJSON);
    })
    .catch((error) => 
    {
        console.error("There was an error parsing the original file!");
        console.error(error);
        return;
    });
},300);


//This method will take the text supplied, and store it in the file specified by path.
setTimeout(function()
{
    let saveToFileAsString = fileData.saveStringToFile("save_string.txt", "Hello friends! This is a function for CS-546WS Lab 2.");

    saveToFileAsString.then((fileSaveString) => 
    {
        console.log(fileSaveString);
    })
    .catch((error) => 
    {
        console.error("There was an error parsing the original text!");
        console.error(error);
        return;
    });
},500);


//This method will take the obj supplied and convert it into a string so that it may stored as in a file.
setTimeout(function()
{
    let dataJSON = {color: "red", value: "#f00"};
    let saveToFileAsJSON = fileData.saveJSONToFile("save_data.json", dataJSON);

    saveToFileAsJSON.then((fileSaveJSON) => 
    {
        console.log(fileSaveJSON);
    })
    .catch((error) => 
    {
        console.error("There was an error parsing the original text!");
        console.error(error);
        return;
    });
},700);


//Compute Chapter 1 Metrics
setTimeout(function()
{
    var text1 = fileData.getFileAsString("chapter1.txt");
    text1.then((data) => 
    {
        console.log("The Chapter 1 metrics are:");
        console.log(textMetrics.createMetrics(data));
    })
    .catch((error) => 
    {
        console.error("There was an error parsing the original text!");
        console.error(error);
        return;
    });
},1000);


//Compute Chapter 2 Metrics
setTimeout(function()
{
    var text2 = fileData.getFileAsString("chapter2.txt");
    text2.then((data) => 
    {
        console.log("The Chapter 2 metrics are:");
        console.log(textMetrics.createMetrics(data));
    })
    .catch((error) => 
    {
        console.error("There was an error parsing the original text!");
        console.error(error);
        return;
    });
},2000);


//Compute Chapter 3 Metrics
setTimeout(function()
{
    var text3 = fileData.getFileAsString("chapter3.txt");
    text3.then((data) => 
    {
        console.log("The Chapter 3 metrics are:");
        console.log(textMetrics.createMetrics(data));
    })
    .catch((error) => 
    {
        console.error("There was an error parsing the original text!");
        console.error(error);
        return;
    });
},3000);



