var type;
var gender;
var nickname;

let catUrl = "assets/img/cat.jpg";
let dogUrl = "assets/img/dog.png";

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

function render() {
    if (localStorage.getItem("isAdopted") == null) {
        document.location.href = "adopt.htm";
    }

    if (localStorage.getItem("localType") == "dog") {
        document.getElementById("pet").src = dogUrl;
    } else if (localStorage.getItem("localType") == "cat") {
        document.getElementById("pet").src = catUrl;
    }

    document.getElementById("name").innerHTML = localStorage.getItem("localNick")
}