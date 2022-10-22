const tips = document.querySelectorAll('.tips');
const billInput = document.querySelector('#bill');
const tipCustom = document.querySelector('.tip-custom')
const numberPeople = document.querySelector('.people-number-input');

const tipsContainer = document.querySelector('.tips-container');

const billErrorSpan = document.querySelector('.bill-error');
const tipErrorSpan = document.querySelector('.tip-error');
const peopleErrorSpan = document.querySelector('.people-error');

applyError(billErrorSpan, 'The field cannot be empty');
applyError(tipErrorSpan, 'You must select an option');
applyError(peopleErrorSpan, 'The field cannot be empty');

tips.forEach((tip) => {
  tip.addEventListener('click', checkTip);
})

function checkTip(e) {
  tips.forEach((tip) => {
    tip.classList.remove('selected');
    tipCustom.classList.remove('input-selected');
    tipCustom.value = null;
    if(e.target.innerHTML == tip.innerHTML) {
      if(!e.target.classList.contains('tips-input_container')) e.target.classList.add('selected');
      if(tipsContainer.querySelector('.selected') || tipsContainer.querySelector('.input-selected')) removeError(tipErrorSpan);
    };
  });
};

tipCustom.addEventListener('blur', () => {
  if (tipCustom.value.length >= 1 && tipCustom.value.slice(-1) != '%') tipCustom.value += '%';
  if (tipCustom.value.length >= 1) {
    if((tipCustom.value == '0,00%') ? applyError(tipErrorSpan, `Can't be zero`) : tipCustom.classList.add('input-selected'));
  }
  if(tipsContainer.querySelector('.selected') || tipsContainer.querySelector('.input-selected')) removeError(tipErrorSpan);
  if(!tipsContainer.querySelector('.selected') && !tipsContainer.querySelector('.input-selected')) applyError(tipErrorSpan, 'You must select an option');
  if(tipCustom.value == '0,00%') applyError(tipErrorSpan, `Can't be zero`);
});

function applyError(tag, msg) {
  tag.style.display = "block";
  tag.innerHTML = msg;
}

function removeError(tag) {
  tag.style.display = "none";
  tag.innerHTML = '';
}

billInput.addEventListener('blur', () => {
  if((billInput.value !== '0,00') ? removeError(billErrorSpan) : applyError(billErrorSpan, 'The field cannot be empty'));
});

billInput.addEventListener('blur', () => {
  console.log(billInput.value.replaceAll('.', '').replaceAll(',', '.').replaceAll('%', ''));
});

const onlyNumbers = new RegExp('^[0-9]+$');
numberPeople.addEventListener('blur', () => {
  if(numberPeople.value.length <= 0) {
    applyError(peopleErrorSpan, 'The field cannot be empty');
  } else if(numberPeople.value == 0) {
    applyError(peopleErrorSpan, `Can't be zero`)
  } else if(!onlyNumbers.test(numberPeople.value)) {
    applyError(peopleErrorSpan, 'Use only whole numbers');
  } else {
    removeError(peopleErrorSpan)
  }
})