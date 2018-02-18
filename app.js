const btn1 = document.getElementById("button1");

btn1.addEventListener("click", getText);

function getText () {
    fetch("test.txt")
    .then(function(res){
        console.log(res);
    });
}