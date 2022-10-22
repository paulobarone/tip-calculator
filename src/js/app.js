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

tips.forEach((val) => {
  val.addEventListener('click', checkTip)
})

function checkTip(e) {
  tips.forEach((val) => {
    val.classList.remove('selected');
    tipCustom.classList.remove('input-selected')
    tipCustom.value = null
    if(e.target.innerHTML == val.innerHTML) {
      val.classList.add('selected')
      if(tipsContainer.querySelector('.selected') || tipsContainer.querySelector('.input-selected')) removeError(tipErrorSpan)
    }
  })
}

tipCustom.addEventListener('blur', () => {
  if (tipCustom.value.length >= 1 && tipCustom.value.slice(-1) != '%') tipCustom.value += '%';
  if (tipCustom.value.length >= 1) tipCustom.classList.add('input-selected');
  if(!tipsContainer.querySelector('.selected') && !tipsContainer.querySelector('.input-selected')) applyError(tipErrorSpan, 'You must select an option');
})

function applyError(tag, msg) {
  tag.style.display = "block"
  tag.innerHTML = msg
}

function removeError(tag) {
  tag.style.display = "none"
  tag.innerHTML = ''
}