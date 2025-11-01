// selectors
const counterDisplay = document.getElementById("counter");
const btns = document.querySelectorAll(".btn");

// set initial count 
let count = 0;

// add event 
btns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        let styles = event.currentTarget.classList;
        if(styles.contains("increase")){
            count ++; 
        }
        else if(styles.contains("decrease")){
            count --; 
        }
        else{
            count = 0;
        }
        if(count > 0){
            counterDisplay.style.color = "green";
        }
        else if(count < 0){
            counterDisplay.style.color = "red";
        }
        else{
            counterDisplay.style.color = "#222";
        }
        counterDisplay.textContent = count;
    })
})

