const fs = require('fs');

let fileData = exports = module.exports;

fileData.getFileAsString = (path) => 
{
    return new Promise((fulfill, reject) => 
    {
        if (!path) reject("No file path provided!");
        fs.readFile(path, "utf-8", (error, data) => 
        {
            if (error) 
            {
                reject(error);
                return;
            }
            try 
            {
                fulfill(data);
            } 
            catch (parsingError) 
            {
                reject(parsingError);
            }
        });
    })
};

fileData.getFileAsJSON = (path) => 
{
    return new Promise((fulfill, reject) => 
    {
        if (!path) reject("No file path provided!");
        fs.readFile(path, "utf-8", (error, data) => 
        {
            if (error) 
            {
                reject(error);
                return;
            }

            try 
            {
                let asJSON = JSON.parse(data);
                fulfill(asJSON);
            } 
            catch (parsingError) 
            {
                reject(parsingError);
            }
        });
    })
};

fileData.saveStringToFile = (path, text) => 
{
    return new Promise((fulfill, reject) => 
    {
        if (!path || !text) reject("No file path or text provided!");

        fs.writeFile(path, text, "utf-8", (error, data) => 
        {
            if (error) 
            {
                reject(error);
                return;
            }
            fulfill("The text provided has been stored in the file located at: " +path);
        });
    });
};

fileData.saveJSONToFile = (path, obj) => 
{
    return new Promise((fulfill, reject) => 
    {
        if (!path || !obj) reject("No file path or object provided!");

        fs.writeFile(path, JSON.stringify(obj, null, 5), (error, data) => 
        {
            if (error)
            {
                reject(error);
                return;
            }
            fulfill("The object provided has been stored in the file located at: " +path);
        });
    });
};