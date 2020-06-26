//create global array
let array = [];

//Function to generate random number.
function random() {
    return Math.floor(Math.random() * 6) + 1;
}

//Dice function
let Dice = function () {
    //Call roll dice function and assign value.
    this.value = this.rollDice();
    //Create the div.
    this.div = document.createElement('div');
    //Assign previous value to div.
    this.div.innerText = this.value;
    //Assign a classname.
    this.div.className = 'die';
    //Append div to the div box from the HTML.
    document.getElementById('box').appendChild(this.div);

    //Add an event listener when double click, it deletes.
    //Remove the value from the array as well.
    this.div.addEventListener('dblclick', function () {
        this.div.remove();
        let id = array.indexOf(this);
        array.splice(id, 1);
    }.bind(this))

}

//Associate random number function when die is rolled.
Dice.prototype.rollDice = function () {
    return random();
}

//Get generate button from html and add an event listener to it.
//Call the Dice function to get value rolled and push value onto global array already declared.
document.getElementById('generate').addEventListener('click', function () {
    let value = new Dice();
    array.push(value);
})

//Get roll button from html and add an event listener to it.
//Create a for loop to loop through array values and call rollDice function to generate new values.
document.getElementById('rolling').addEventListener('click', function () {
    for (let j = 0; j < array.length; j++) {
        array[j].value = array[j].rollDice();
        array[j].div.innerText = array[j].value;
    }
})

//Get sum button from html and add an event listener to it.
//Create a for loop to loop through each value currently displayed (and store in the array) and sum for total.

document.getElementById('sum').addEventListener('click', function () {
    let total = 0;
    for (let k = 0; k < array.length; k++) {
        total += array[k].value;
    }
    alert('The total value of each die is: ' + total);
})