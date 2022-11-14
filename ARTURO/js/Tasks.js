"use strict";

//Acciones del INPUT

const NORMALbutton = document.getElementById("NORMAL");

NORMALbutton.addEventListener("click", () => {
  NORMALbutton.classList.toggle("click");
  setTimeout(() => {
    NORMALbutton.classList.remove("click");
  }, 300);
});

const SENDbutton = document.getElementById("SENDB");

SENDbutton.addEventListener("click", () => {
  SENDbutton.classList.toggle("click");
  setTimeout(() => {
    SENDbutton.classList.remove("click");
  }, 300);
});

NORMALbutton.onclick = function changetext() {
  if (NORMALbutton.innerHTML === "NORMAL") {
    NORMALbutton.innerHTML = "IMPORTANT";
  } else {
    NORMALbutton.innerHTML = "NORMAL";
  }
};

const EDITbutton = document.getElementById("Edit");
const DONEbutton = document.getElementById("Done");
const DELETEbutton = document.getElementById("Delete");

EDITbutton.addEventListener("click", () => {
  EDITbutton.classList.toggle("click");
  setTimeout(() => {
    EDITbutton.classList.remove("click");
  }, 300);
});

DONEbutton.addEventListener("click", () => {
  DONEbutton.classList.toggle("click");
  setTimeout(() => {
    DONEbutton.classList.remove("click");
  }, 300);
});

DELETEbutton.addEventListener("click", () => {
  DELETEbutton.classList.toggle("click");
  setTimeout(() => {
    DELETEbutton.classList.remove("click");
  }, 300);
});
//====================================================

//Acciones de tareas
