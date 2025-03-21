let count = 0;
const countEl = document.getElementById("count");
function increase(){
    count++;
    countEl.innerText = count;
}
function decrease(){
    count--;
    countEl.innerText = count;
}
function reset(){
    count = 0;
    countEl.innerText = count;
}