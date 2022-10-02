/**
 * 
Challenge1: String Challenge in JavaScript
Have the function StringChallenge(str) take the str parameter being passed which will be an average rating between 0.00 and 5.00, and convert this rating into a list of 5 image names to be displayed in a user interface to represent the rating as a list of stars and half stars. 
Ratings should be rounded to the nearest half. 
There are 3 image file names available: "full.jpg", "half.jpg", "empty.jpg". 
The output will be the name of the 5 images (without the extension), from left to right, separated by spaces. 

For example: if str is "2.36" then this should be displayed by the following image:



So your program should return the string "full full half empty empty".
Examples
Input: "0.38"
Output: half empty empty empty emptyInput: "4.5"
Output: full full full full half

 */
const testCases = ['0.38','2.36','4.5']


export default function stringChallenge(str){
    let full = +str | 0;
    const deci = (+str - full).toFixed(2);
    let half  = 0;
    let result = '';
    
    if(deci > 0.5 || deci === 0){
        full += 1;
        result = 'full '.repeat(full) + 'empty '.repeat(5 - (full + half));
        return result.slice(0, -1);
    } else if(deci > 0){
        half += 1;
        result = 'full '.repeat(full) + 'half '.repeat(half) + 'empty '.repeat(5 - (full + half));
        return result.slice(0, -1);
    }
    
}

console.log(testCases.map(ele => stringChallenge(ele)))