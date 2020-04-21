var Die = require('./die.js');

document.addEventListener("DOMContentLoaded", () => {
    var dice = [];
    document.getElementById("d6").addEventListener("click", () => {
        var sumOfDice = 0;
        var dieElements = document.getElementsByClassName("output");
        for (var i = 0; i < dice.length; i++) {
            var die = dice[i]
            var rolled = die.roll()
            document.getElementById(die.id).innerHTML = rolled
            sumOfDice += rolled;
        }
        document.getElementById("sum").innerHTML = sumOfDice;
    })
    var dieIndex = 0
    document.getElementById("addNewDie").addEventListener("click", () => {
        var newDieElement = document.createElement("p")
        dieIndex += 1
        var dieId = "die-" + dieIndex
        var numSides = document.getElementById("numSides").value
        if (isNaN(numSides)) {
            window.alert("No Dice! That's not a number.")
        } else if (numSides <= 0) {
            window.alert("Stay Positive! Number of sides must be greater than zero.")
        } else if (numSides % 1 != 0 ) {
            window.alert("Stay Wholesome! Whole numbers only, please.")
        } else {
            var die = new Die(dieId, numSides)
            newDieElement.innerHTML = "Die " + dieIndex + " (" + numSides + " sides): "
            var newOutput = document.createElement("span")
            newOutput.id = dieId
            newDieElement.appendChild(newOutput)
            document.getElementById("diceBucket").appendChild(newDieElement)
            dice.push(die)
        }
    })
    document.getElementById("removeDie").addEventListener("click", () => {
       var diceBucket = document.getElementById("diceBucket")
       diceBucket.removeChild(diceBucket.lastElementChild)
       dice.pop()
       dieIndex -= 1
    })
});