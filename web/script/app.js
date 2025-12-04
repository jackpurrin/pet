var type;
var gender;
var nickname;

var time = 7;
var hunger = 5;
var sleep = 10;
var mood = 10;
var money = 100; // 100 for testing, prod will be 0.

let catUrl = "assets/img/cat.jpg";
let dogUrl = "assets/img/dog.png";
let sealUrl = "assets/img/seal.jpg"

function save() {
    type = document.querySelector('input[name="type"]:checked')?.value;
    gender = document.querySelector('input[name="gender"]:checked')?.value;
    nickname = document.querySelector('input[name="nickname"]')?.value

    localStorage.setItem("localNick", nickname);
    localStorage.setItem("localGen", gender);
    localStorage.setItem("localType", type);

    if (type == undefined || gender == undefined || nickname == undefined) {
        ("Make sure you fill all the boxes!");
        document.getElementById('error-text').removeAttribute("hidden");
        
    } else {
        localStorage.setItem("isAdopted", "True")
        document.location.href = "index.htm";
    }
}

function update() {
    document.getElementById("time").innerHTML = "Time: " + time
    document.getElementById("hunger").innerHTML = "Hunger: " + hunger
    document.getElementById("mood").innerHTML = "Happiness: " + mood
    document.getElementById("sleep").innerHTML = "Sleep: " + sleep
    document.getElementById("money").innerHTML = "Money: " + money
}

function render() {
    if (localStorage.getItem("isAdopted") == null) {
        document.location.href = "adopt.htm";
    }

    if (localStorage.getItem("localType") == "dog") {
        document.getElementById("pet").src = dogUrl;
    } else if (localStorage.getItem("localType") == "cat") {
        document.getElementById("pet").src = catUrl;
    } else if (localStorage.getItem("localType") == "seal") {
        document.getElementById("pet").src = sealUrl;
    }

    update()

    document.getElementById("name").innerHTML = localStorage.getItem("localNick")
}

function main() {
    setInterval(() => {
        time += 1;
        hunger -= 0.2;
        sleep -= 1;
        mood -= 0.5;

        update()
    }, 5000);
}
