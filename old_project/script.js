"use strict";

function setDisabledBtn(btn) {
  btn.setAttribute("disabled", "true");
}

function removeDisabledBtn(btn) {
  btn.removeAttribute("disabled");
}

const getElement = (selector) => document.querySelector(selector);

const taskNameElement = getElement("#name");
const resultFieldElement = getElement("#result");
const taskDescriptionElement = getElement("#description");
const createBranchNameBtn = getElement("#create-name-btn");
const copyBranchNameBtn = getElement("#copy-branch-name-btn");

let taskName = "";
let description = "";
let textContent = "";

if (taskName.length > 0 || description.length > 0) {
  setDisabledBtn(createBranchNameBtn);
} else {
  removeDisabledBtn(createBranchNameBtn);
}

taskNameElement.addEventListener("input", () => {
  taskName = taskNameElement.value.trim().toUpperCase();
});

taskDescriptionElement.addEventListener("input", () => {
  description = taskDescriptionElement.value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
});

createBranchNameBtn.addEventListener("click", () => {
  resultFieldElement.textContent = `${taskName}${taskName ? "/" : ""}${description}`;
});

const copyBranchName = () => {
  const range = document.createRange();
  range.selectNode(resultFieldElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  } catch (err) {
    console.error("Copy to clipboard failed: ", err);
  }
};

copyBranchNameBtn.addEventListener("click", copyBranchName);
