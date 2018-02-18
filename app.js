const btn1 = document.getElementById("button1"),
      btn2 = document.getElementById("button2"),
      btn3 = document.getElementById("button3"),
      output = document.getElementById("output");

btn1.addEventListener("click", getText);
btn2.addEventListener("click", getJson);
btn3.addEventListener("click", getExternal);

function getText() {
    fetch("test.txt")
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        output.innerHTML = data;
    })
    .catch(function(err) {
        console.log(err);
    });
}

function getJson() {
    fetch("posts.json")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //console.log(data);
        let answer ="";
        data.forEach(function(post){
            answer += `<li>${post.title}: ${post.body}</li>`;
        });
        output.innerHTML = answer;
    })
    .catch(function(err) {
        console.log(err);
    });
}

function getExternal() {
    fetch("https://api.github.com/users")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //console.log(data);
        let answer ="";
        data.forEach(function(user){
            answer += `<li><img src="${user.avatar_url}" alt="user avatar image" height="50" width="50"> ${user.login}</li>`;
        });
        output.innerHTML = answer;
    })
    .catch(function(err) {
        console.log(err);
    });
}