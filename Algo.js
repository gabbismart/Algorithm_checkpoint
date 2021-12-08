/*
    Objective
At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character and to determine:

 

Instructions
The length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.
You have to keep in mind that: 

Each character will be treated separately.
The last character is the point.
Use three variables as counters.
*/

//write a sentence with each word ending with a dot
//count the number of character in the sentence.
//calculate number of words in the sentence = Word 
// calculate number of vowels in the sentence = Vowel
//create an array that check if the characters includes vowle and return array

var text = "I. live. a. coding. life."
numberOfChar = test.split("").length;
numberOfWords = test.split("");
console.log(numberOfChar,numberOfWords);
var vowelsCount = 0 
const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of test) {
        if(vowels.includes(char)) {
            voweelsCount++
        }
    }
    console.log(vowelsCount);
//return vowelsCount