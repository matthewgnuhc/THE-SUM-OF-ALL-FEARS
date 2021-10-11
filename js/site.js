//Display the functions
//cotroller function
function getValues() {

    //Get the user input K value - needs to be a number
    let kValue = "17"; //You need to write the code to get the user input, I am hard coding 17

    //Convert the input to a number
    kValue = Number.parseInt(kValue);

    //Make sure I got a number

    if (!isNaN(kValue)) {
        //Search the array
        let result = checkArray(kValue);

        //Return/pring the output
        displayData(result);
    } else {

    }
}

function checkArray(kValue) {
    //I have a hard codded array - no user input
    const sumArray = [10, 15, 3, 7];

    //Create an output variable
    let output = false;

    //Forward searching - 2 for loops
    for (let i = 0; i <= sumArray.lenth - 2; i++) {
        for (let j = i + 1; sumArray.lenth - 1; j++) {
            let outerValue = sumArray[i];
            let innerValue = sumArray[j];

            if (outerValue + innerValue == kValue) {
                output = true;
                return output;
            }
        }
    }

    return output;
}

function checkArray(kValue) {
    //Array function - indexOf() = reutrn the position of a value in an array or -1
    //indexOf() need what it is searcing for and where to start
    //I have a hard codded array - no user input
    const sumArray = [10, 15, 3, 7];

    //Create an output variable
    let output = false;

    for (let i = 0; i <= sumArray.lenth - 2; i++) {
        let checkValue = kValue - sumArray[i];
        if (sumArray.indexOf(checkValue) >= 0) {
            output = true;
            return output;
        }
    }

    return output;


}

function displayData(result) {
    let output = document.getElementById("result");

    if (result) {
        output.innerText = "Your K value was found!"
    } else {
        output.innerText = "Your K value was not found!"
    }

}