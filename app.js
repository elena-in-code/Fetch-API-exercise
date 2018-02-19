const btn1 = document.getElementById("button1"),
      btn2 = document.getElementById("button2"),
      btn3 = document.getElementById("button3"),
      output = document.getElementById("output");

btn1.addEventListener("click", getText);
btn2.addEventListener("click", getJson);
btn3.addEventListener("click", getExternal);

function getText() {
    fetch("test.txt")
    .then(res => res.text())
    .then(data => { 
        output.innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJson() {
    fetch("posts.json")
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        let answer ="";
        data.forEach(function(post){
            answer += `<li>${post.title}: ${post.body}</li>`;
        });
        output.innerHTML = answer;
    })
    .catch(err => console.log(err));
}

function getExternal() {
    fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        let answer ="";
        data.forEach(function(user){
            answer += `<li><img src="${user.avatar_url}" alt="user avatar image" height="50" width="50"> ${user.login}</li>`;
        });
        output.innerHTML = answer;
    })
    .catch(err => console.log(err));
}
/*
//Arrow function explanation:++++++++++++++++++++

//Standard function:
const sayHello = function() {
    console.log("Hello");
}
sayHello();

//Arrow function:
const sayHello = () => {
    console.log("Hello");
}
sayHello();

//Arrow function - more compact - one line function does not need braces:
const sayHello = () => console.log("Hello");
sayHello();

//One line returns
const sayHello = () => "Hello";
console.log(sayHello());

//return object
const sayHello = () => ({msg: "Hello"});
console.log(sayHello());

//single parameter dont need parenthesis
const sayHello = name => console.log(`Hello ${name}`);
sayHello("Teresa");

//multiple parameters
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
sayHello("Teresa", "Boo");

//arrow functions as callbacks
const users = ['Marta', 'Karl', 'Patrice'];
    //standard
const nameLengths = users.map(function(name){
    return name.length;
});
    //arrow
const nameLengths = users.map((name) => {
    return name.length;
});
    //arrow shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);
*/