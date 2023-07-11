"use strict";

// const btnStart = document.querySelector("#btn-start");

// btnStart.addEventListener("click", onBtnClick);

// function onBtnClick() {
//   const grid = createGrid();
//   const div = document.querySelector("div.bg-gridcolor");
//   div.append(grid);
//   console.log(grid);

//   console.log(grid);
// }

// function createSingleSquare() {
//   const square = document.createElement("div");
//   const squaresPerRow = Math.sqrt(10);

//   square.classList.add("grid-square");

//   square.style.flexBasis = `calc(100% / ${squaresPerRow})`;
//   return square;
// }

// function createGrid() {
//   const grid = [];
//   for (let i = 0; i < 100; i++) {
//     const newSquare = createSingleSquare("sqr" + i);
//     grid.push(newSquare);
//   }
//   return grid;
// }

const btnStart = document.querySelector("#btn-start");
btnStart.addEventListener("click", onBtnClick);

function onBtnClick() {
  const grid = createGrid();
  const div = document.querySelector("div.bg-gridcolor");
  for (let i = 0; i < grid.length; i++) {
    div.append(grid[i]);
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
