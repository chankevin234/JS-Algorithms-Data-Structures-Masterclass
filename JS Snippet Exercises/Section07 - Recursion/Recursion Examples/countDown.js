function countDown(num) {
    if (num <= 0) {
        console.log("Done: Base Case Reached!");
        return; // THIS IS OUR BASE CASE!!!
    }

    console.log(num);
    num--;
    countDown(num);
}

countDown(5);