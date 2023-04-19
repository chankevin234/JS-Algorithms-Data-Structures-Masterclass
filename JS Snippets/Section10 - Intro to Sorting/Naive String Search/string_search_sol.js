function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){ // loops over the LONG string
        for(var j = 0; j < short.length; j++){ // loops over the SHORT string
           console.log(short[j], long[i+j]);
           
            if(short[j] !== long[i+j]) {
                console.log("BREAK");
                break
            }; // the SHORT string hasn't shown up in this segment of the LONG string
           if(j === short.length - 1) {
                count++
            }; // if the short string shows up in the LONG string, count +1
        }
    }
    console.log(count);
    return count;
}

naiveSearch("lorie loled", "lol")