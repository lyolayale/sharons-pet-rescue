/*
- Purpose: Practice JS factory functions
- Date: 01-NOV-2022 🍂
*/

// ==== variables ====

const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

//====================================================
//==== Create a Factory Function & Add Properties ====
//====================================================

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    //===================================
    //==== Create a Method for Sleep ====
    //===================================
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    //======================================
    //==== Create a Method for Playtime ====
    //======================================
    play: function () {
      if (this.isTired === 10) {
        console.log(`${this.name} is too tired to play!`);
        this.sleep();
      } else {
        console.log(`Yay! ${this.name} love to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

//==============================
//==== Create 5 New Objects ====
//==============================

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

//==============================
//==== Verify Objects & Methods ====
//==============================

// console.log(sora, clover, baxter, cleo, francine);
// clover.sleep();
// baxter.play();
// console.log("-------------------------");

// console.log(clover, baxter);

//========================================================
//==== Update Properties & Create an Array of Objects ====
//========================================================

clover.isTired = 8;
francine.isTired = 9;

const allPets = [];
allPets.push(sora, clover, baxter, cleo, francine);
// console.log(...allPets);

//=====================================
//==== Display Pets in the Browser ====
//=====================================

const showPets = function (arr) {
  pets.innerHTML = "";

  for (let item of arr) {
    let status = "ready to play!";

    if (item.isTired >= 7) {
      status = "sleeping.";
    }

    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${item.name}</span> is a ${item.species} is <span class="underline">${status}</span>`;
    pets.append(li);
    // ---- underline status ----
    const underlineAll = document.querySelectorAll(".underline");
    underlineAll.forEach(function (item) {
      item.style.textDecoration = "underline";
    });
  }
};

//=========================
//==== Add Click Event ====
//=========================

// ---- button --> show status ----
statusButton.addEventListener("click", function () {
  showPets(allPets);
  this.innerText = "Press Esc to Clear List";
});

// ---- clear .all-pets ul/container ----
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Enter") {
    pets.innerHTML = "";
    statusButton.innerText = "Show pet status";
  }
});
