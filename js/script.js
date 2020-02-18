const startButton = document.querySelector('.start-button'),
  firstScreen = document.querySelector('.first-screen'),
  mainForm = document.querySelector('.main-form'),
  formCalculate = document.querySelector('.form-calculate'),
  endButton = document.querySelector('.end-button'),
  total = document.querySelector('.total'),
  fastRange = document.querySelector('.fast-range');

function showElement(elem) {
  elem.style.display = 'block';
}

function hideElement(elem) {
  elem.style.display = 'none';
}

function handlerCallBackForm(e){

  console.log(e);
  

  const target = e.target;

  if (target.classList.contains('want-faster')) {

    target.checked ? showElement(fastRange) : hideElement(fastRange);
    


  }

}

startButton.addEventListener('click', () => {
  showElement(mainForm);
  hideElement(firstScreen);
});
endButton.addEventListener('click', () => {

  for (const elem of formCalculate.elements) {
    if (elem.tagName === 'FIELDSET') {
      hideElement(elem);
    }

  }
  showElement(total);
});

formCalculate.addEventListener('change',handlerCallBackForm);