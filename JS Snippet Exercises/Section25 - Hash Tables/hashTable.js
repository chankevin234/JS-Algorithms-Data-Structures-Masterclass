/*
Hash Table Implementation

*/

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    // denotes a PRIVATE function - HASHCODE
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    /*  @set - adds a key/value pair into keyMap
        Input = key, value    */
    set(key, value) { 
        // hash the key
        let idx = this._hash(key);
        let newPair = [key, value];

        // stores the key-value pair in the hash table array via 'separate chaining'
        if (!this.keyMap[idx]) { //checks if the slot is empty
            this.keyMap[idx] = []; // if so, add an empty array there
        }
        // then push in an array (key/value pair)
        this.keyMap[idx].push(newPair);         
        console.log("Finished adding new pair at Index: " + idx);
    }

    /*  @get - retieves a key/value pair in keyMap
        Input = key */
    get(key) { // accepts a key 
        // hashes the key
        let idx = this._hash(key);
        // set variable for the current slot you are searching
        let slot = this.keyMap[idx];
        
        // if slot has value, search through the arrays in the slot
        if (slot) { 
            for (let i = 0; i < slot.length; i++) {
                // check if the key exists in the slot
                // [i] = array, [0] = first value
                if (slot[i][0] === key) {
                    // returns the key-value pair in hash table
                    console.log("Subarray: " + slot[i]);
                    console.log("Key: " + slot[i][0]);
                    console.log("Value: " + slot[i][1]);
                    return slot[i][1];
                } 
            }
        } 
        // if slot has no value, return undefined
        return undefined;
    }
    /* getKeys() - returns an array of keys from a hash table */
    getKeys() {
        // create an array to store the keys
        let keyArr = [];

        // loop through the hash table array (this.keyMap) and return an array of the keys
        for (let slot of this.keyMap) { 
            //slot = this.keyMap[i]
            if (slot) { 
                // if there is value in the slot, loop through it
                for (let i = 0; i < slot.length; i++){
                    let key = slot[i][0];
                    if (!keyArr.includes(key)) { // only return unique keys
                        keyArr.push(key);            
                    }
                }     
            }
        }   
        // return key array 
        console.log("Found keys: " + keyArr);
        return keyArr;
    }

    /* getValues() - returns an array of values from a hash table */
    getValues() {
        // create an array for unique values
        let valArr = [];
        // loop through each slot in the keyMap
        for (let slot of this.keyMap) {
            // if there is values in the slot
            if (slot) {
                // loop through the values in the slot
                for (let i = 0; i < slot.length; i++) {
                    let value = slot[i][1];
                    // if there is a unique value
                    if (!valArr.includes(value)) {
                        // push into valArr                    
                        valArr.push(value);
                    }
                }
            }
        }
        // end loop
        console.log("Found values: " + valArr);
        return valArr;
    }

    toString() {
        console.log(this.keyMap);
        return this.keyMap;
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000");
ht.set("maroon","#800000");
ht.set("maroon","#800000");

ht.set("yellow","#FFFF00");
ht.set("olive","#808000");
ht.set("salmon","#FA8072");
ht.set("lightcoral","#F08080");
ht.set("mediumvioletred","#C71585");
ht.set("plum","#DDA0DD");

ht.toString();

ht.get("maroon");
ht.getKeys();
ht.getValues();