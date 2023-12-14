'use strict';

const taskNameElement = document.getElementById('name');
const taskDescriptionElement = document.getElementById('description');
const resultFieldElement = document.getElementById('result');
const createBranchNameBtn = document.getElementById('create-name-btn');
const copyBranchNameBtn = document.getElementById('copy-branch-name-btn');

let taskNameValue = '';
let sanitizedName = '';
let textContent = '';

taskNameElement.addEventListener('input', () => {
  taskNameValue = taskNameElement.value.toUpperCase()
});

taskDescriptionElement.addEventListener('input', () => {
  sanitizedName = taskDescriptionElement.value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
});

createBranchNameBtn.addEventListener('click', () => {
  resultFieldElement.textContent = `${taskNameValue}${taskNameValue ? '/': ''}${sanitizedName}`;
})

const copyBranchName = () => {
  // Create a range and select the text in the paragraph
  const range = document.createRange();
  range.selectNode(resultFieldElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);

  try {
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // Deselect the text
    // alert("Text copied to clipboard");
  } catch (err) {
    console.error("Copy to clipboard failed: ", err);
  }
}

copyBranchNameBtn.addEventListener('click', copyBranchName);
