var type;
var gender;
var nickname;

let catUrl = "/assets/img/cat.jpg";
let dogUrl = "/assets/img/dog.png";
let sealUrl = "/assets/img/seal.jpg";
let skullUrl = "/assets/img/skull.png";

if (localStorage.getItem("hasSaved") == "true") {
   load()
} else {
   var time = 7;
   var hunger = 5;
   var sleep = 0;
   var mood = 10;
   var money = 100; // 100 for testing, prod will be 0.
   var sick = 0;
   var depressed = false;
   var bad_tick = 0;
   var in_bed = false;
}

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
      document.location.href = "/";
   }
}

function localSave() {
   localStorage.setItem("localTime", time)
   localStorage.setItem("localHunger", hunger)
   localStorage.setItem("localSleep", sleep)
   localStorage.setItem("localMood", mood)
   localStorage.setItem("localMoney", money)
   localStorage.setItem("localSick", sick)
   localStorage.setItem("localDepressed", depressed)
   localStorage.setItem("localBad", bad_tick)
   localStorage.setItem("localBed", in_bed)
}

function load() {
   time = Number(localStorage.getItem("localTime"))
   hunger = Number(localStorage.getItem("localHunger"))
   sleep = Number(localStorage.getItem("localSleep"))
   mood = Number(localStorage.getItem("localMood"))
   money = Number(localStorage.getItem("localMoney"))
   sick = Number(localStorage.getItem("localSick"))
   depressed = localStorage.getItem("localDepressed")
   bad_tick = Number(localStorage.getItem("localBad"))
   in_bed = localStorage.getItem("localBed")
}

function update() {
   if (localStorage.getItem("hasSaved") == null) {
      localStorage.setItem("hasSaved", true)
   } else {
      localSave()
   }

   document.getElementById("time").innerHTML = "Time: " + time
   document.getElementById("hunger").innerHTML = "Hunger: " + hunger
   document.getElementById("mood").innerHTML = "Happiness: " + mood
   document.getElementById("sleep").innerHTML = "Sleepiness: " + sleep
   document.getElementById("money").innerHTML = "Money: " + money
}

function render() {
   if (localStorage.getItem("isAdopted") == null) {
      document.location.href = "adopt";
   }

   if (localStorage.getItem("localType") == "dog") {
      document.getElementById("pet").src = dogUrl;
   } else if (localStorage.getItem("localType") == "cat") {
      document.getElementById("pet").src = catUrl;
   } else if (localStorage.getItem("localType") == "seal") {
      document.getElementById("pet").src = sealUrl;
   }

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
         if (in_bed == false) {
            hunger -= 0.5;
         } else if (in_bed == true) {
            hunger -= 0.1;
         }
      } else {
         sick -= 0.1;
      }
      if (sleep < 10) {
         if (in_bed == false) {
            sleep += 1;
         }
      } else {
         sick += 0.05;
         mood - +1;
      }

      if (in_bed == true) {
         if (sleep > 0) {
            sleep -= 1;
         } else if (sleep == 0) {
            in_bed = false;
         }
      }

      if (mood > 0) {
         if (in_bed == false) {
            mood -= 0.5;
         }
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
      } else {
         if (bad_tick < 0) {
            bad_tick += 0
         } else {
            bad_tick -= 1;
         }
      }

      update()
   }, 1000);
}

function feed() {
   if (money >= 10 && hunger < 5) {
      if (in_bed == true) {
         in_bed == false;
      }
      money -= 10
      hunger += 2.5
      update()
   }
}

function bed() {
   if (in_bed == false) {
      in_bed = true;
   } else {
      in_bed = false;
   }
}

function play() {
   if (money >= 5 && mood < 10) {
      if (in_bed == true) {
         in_bed == false;
      }
      money -= 5
      mood += 2.5
      update()
   }
}
