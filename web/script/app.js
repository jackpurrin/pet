var type;
var gender;
var nickname;

var time = 7;
var hunger = 5;
var sleep = 0;
var mood = 10;
var money = 100; // 100 for testing, prod will be 0.
var sick = 0;
var depressed = false;
var bad_tick = 0;

let catUrl = "assets/img/cat.jpg";
let dogUrl = "assets/img/dog.png";
let sealUrl = "assets/img/seal.jpg";
let skullUrl = "assets/img/skull.png";

function save() {
    type = document.querySelector('input[name="type"]:checked')?.value;
    gender = document.querySelector('input[name="gender"]:checked')?.value;
    nickname = document.querySelector('input[name="nickname"]')?.value

    localStorage.setItem("localNick", nickname);
    localStorage.setItem("localGen", gender);
    localStorage.setItem("localType", type);

    if (type == undefined || gender == undefined || nickname == undefined) {
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
    document.getElementById("sleep").innerHTML = "Sleepiness: " + sleep
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
    const main_loop = setInterval(() => {
        if (time >= 24) {
            time = 0
        } else {
            time += 1;
        }
        if (hunger > 0) {
            hunger -= 0.5;
        } else {
            sick -= 0.1;
        }
        if (sleep < 10) {
            sleep += 1;
        } else {
            sick += 0.05;
            mood -+ 1;
        }

        if (mood > 0) {
            mood -= 0.5;
        } else {
            depressed = true;
        }
        if (sick < -0.5) {
            document.getElementById('unhealthy').removeAttribute("hidden");
        }
        if (sleep == 10) {
            document.getElementById('tired').removeAttribute("hidden");
        }
        if (depressed == true) {
            document.getElementById('depressed').removeAttribute("hidden");
        }

        if (depressed == true || sleep == 10 || sick < -0.5) {
            bad_tick += 1
            if (bad_tick >= 5) {
                document.getElementById("pet").src = skullUrl;
                document.getElementById('death').removeAttribute("hidden");
                clearInterval(main_loop);
            }
        }

        update()
    }, 500);
}
