const btn1 = document.getElementById("button1");

btn1.addEventListener("click", getText);

function getText () {
    fetch("test1.txt")
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err) {
        console.log(err);
    });
}