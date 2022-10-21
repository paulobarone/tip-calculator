const tips = document.querySelectorAll('.tips');
const tipCustom = document.querySelector('.tip-custom')
const numberPeople = document.querySelector('.people-number-input');

tips.forEach((val) => {
  val.addEventListener('click', checkClick)
})
if (tipCustom.value) tipCustom.classList.add('input-selected');

function checkClick(e) {
  tips.forEach((val) => {
    val.classList.remove('selected')
    tipCustom.classList.remove('input-selected')
    tipCustom.value = null
    if(e.target.innerHTML == val.innerHTML) val.classList.add('selected');
  })
}

tipCustom.addEventListener('change', () => {
  if(tipCustom.value.length >= 0 && tipCustom.value.slice(-1) != '%') tipCustom.value += '%';
  if (tipCustom.value.length >= 1) tipCustom.classList.add('input-selected');
})

numberPeople.addEventListener('change', () => {
  if(numberPeople.value < 1) numberPeople.customValidity()
})