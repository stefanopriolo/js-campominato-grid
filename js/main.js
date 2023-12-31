"use strict";

const btnStart = document.querySelector("#btn-start");
btnStart.addEventListener("click", onBtnClick);

function onBtnClick() {
  const grid = createGrid();
  const div = document.querySelector("div.bg-gridcolor");
  for (let i = 0; i < grid.length; i++) {
    div.append(grid[i]);
    grid[i].addEventListener("click", function () {
      grid[i].style.backgroundColor = "#7fffd4";
      console.log(`Hai premuto la cella ${i}`);
    });
  }
}

function createSingleSquare() {
  const square = document.createElement("div");
  square.classList.add("grid-square");
  return square;
}

function createGrid() {
  const grid = [];
  for (let i = 0; i < 100; i++) {
    const newSquare = createSingleSquare();
    grid.push(newSquare);
  }
  return grid;
}
