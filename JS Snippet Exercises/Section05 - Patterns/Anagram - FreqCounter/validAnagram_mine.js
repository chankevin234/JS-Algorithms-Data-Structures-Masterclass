/* 
    Given two strings, write a function to determine if the second string is an anagram of the first. 
    An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
    
    Steps:
    1) Rephrase the problem: get 2 strings, see if they are anagrams of each other...aka do the strings have the same letters?
        - inputs = 2 strings
        - output = Boolean
    2) Determine use cases
        - the two strings have: same letters, same order = true
        - the two strings have: same letters, diff order = true
        - the two strings have: difference in number of total letters = false
        - the two strings have: same number of total letter AND diff number of letter freqs = false
*/
function validAnagram(string1, string2){
// 3) break down the problem
    
    // if length of string1 != string2, return false
    if (string1.length !== string2.length) {
        return false;
    }
    
    // make 2 objects to check the frequency of letters
    let obj1 = {};
    let obj2 = {};
    
    // for loop to check frequency of string1
    for (let i = 0; i < string1.length; i++) {
        // add the letter as a key, if it doesn't already exist... if it does exist, inc. counter on the letter 
        let letter = string1[i];
        obj1[letter] = (obj1[letter] || 0) + 1;  
    }
    // for loop to check frequency of string2
    for (let letter of string2) { //FOREACH
        // add the letter as a key, if it doesn't already exist... if it does exist, inc. counter on the letter
        obj2[letter] = (obj2[letter] || 0) + 1;
    }    

    console.log(obj1);
    console.log(obj2);
    
    // for loop to compare obj1 to obj2
    for (let key in obj1) {
        // if a key in obj1 != in obj2
        if (!(obj2.hasOwnProperty(key))) {
            return false
        }
        // if a key's counter in obj1 != obj2's
        if (obj1[key] != obj2[key]) {
            return false;
        }
    }
    
    // return true since it is an anagram
    return true;
}

console.log(validAnagram("abc", "acd"));