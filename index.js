let count = 0;

function add() {
    count = count + 1;
    document.getElementById("count-el").innerText = count;
}


function minus(){
    count = count - 1;
    document.getElementById("count-el").innerText = count;
}

function reset(){
    count = count * 0;
    document.getElementById("count-el").innerText = count;
}


