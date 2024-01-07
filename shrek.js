$(document).ready(function(){
    $(".btnss").click(function(){
        var i=$("#bot").text();
        i=Number(i)+1
        $("#bot").text(i);
    })
    $(".btnss").click(function(){
        var i=$("#bel").text();
        i=Number(i)+1
        $("#bel").text(i);
    })
    $(".decreaseBtn").click(function () {

        // Decrease the values
        var i=$("#bot").text();
        if( i >= 1 ){
            i=Number(i)-1
         }
        $("#bot").text(i);
    });
    $(".decreaseBtn").click(function () {
        var i=$("#bel").text();
         if( i >= 1 ){
            i=Number(i)-1
         }
        $("#bel").text(i);
    })
})

let currentNumber = 0;

// Function to decrease the number
function decreaseNumber() {
    if(currentNumber>=1){
    currentNumber--;
    updateNumber();
    }
}
// Function to increase the number
function increaseNumber() {
    currentNumber++;
    updateNumber();
}

// Function to update the displayed number
function updateNumber() {
    document.getElementById('zen').textContent = currentNumber;
}

// ---------------------------another----------------------------------------------
let currentNumbe = 0;

// Function to decrease the number
function decreaseNumbe() {
    if(currentNumbe>=1){
    currentNumbe--;
    updateNumbe();
    }
}
// Function to increase the number
function increaseNumbe() {
    currentNumbe++;
    updateNumbe();
}

// Function to update the displayed number
function updateNumbe() {
    document.getElementById('ruby').textContent = currentNumbe;
}
// another------------------------------------

let currentNumb = 0;

// Function to decrease the number
function decreaseNumb() {
    if(currentNumb>=1){
    currentNumb--;
    updateNumb();
}
}
// Function to increase the number
function increaseNumb() {
    currentNumb++;
    updateNumb();
}

// Function to update the displayed number
function updateNumb() {
    document.getElementById('blue').textContent = currentNumb;
}

// another---------------------------------------------------------

let currentNum = 0;

// Function to decrease the number
function decreaseNum() {
    if(currentNum>=1){
    currentNum--;
    updateNum();
}
}
// Function to increase the number
function increaseNum() {
    currentNum++;
    updateNum();
}

// Function to update the displayed number
function updateNum() {
    document.getElementById('nog').textContent = currentNum;
}
