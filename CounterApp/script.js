const minusbtn = document.querySelector(".minus-btn");
const plusbtn = document.querySelector(".plus-btn");
const count = document.querySelector(".count");
const change = document.querySelector(".changeBy");
const reset = document.querySelector(".reset-btn");


plusbtn.addEventListener("click", function(){
    const countval = parseInt(count.innerText);
    count.innerText = countval + +change.value
});


minusbtn.addEventListener("click", function(){
    const countval = parseInt(count.innerText);
    count.innerText = countval - +change.value
});

reset.addEventListener("click", function(){
    count.innerText = 0
})