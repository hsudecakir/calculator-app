

const buttons = document.querySelectorAll('.calculator-btn');
const specialChars = ['+', '-', '*', '/', '.'];

function selectButton(){
  for (const button of buttons) {
    button.addEventListener('click', totalValue);
  }
}

function totalValue(){
  const btnValue = this.dataset.value;

  if(result.innerText === '0'){
    if(btnValue === '.'){
      result.innerText += btnValue;
    }
    for (const specialChar of specialChars) {
      if(specialChar == btnValue){
        return;
      }
    }
    result.innerText = btnValue;
  } else{
    let lastChar = result.innerText.slice(-1);
    for (const specialChar of specialChars) {
      if(lastChar == specialChar){
        if(btnValue == specialChar){
          return;
        }
      }
    }
    result.innerText += btnValue;
  }
}

function changeTheme(){
  document.body.classList = "";
  if(themeInput.value === '2'){
    document.body.classList.add('light-theme');
  } else if(themeInput.value === '3'){
    document.body.classList.add('purple-theme');
  }
}

function deleteValue(){
  let deletedNumber = result.innerText.slice(0, result.innerText.length - 1);
  result.innerText = deletedNumber;
  if(result.innerText === ''){
    result.innerText = 0;
  }
}

function resetValue(){
  result.innerText = '0';
}

function showResultValue(){
  try{
    let resultValue = eval(result.innerText);
    result.innerText = resultValue;
  } catch{
    alert('Hatalı işlem');
  }
}

selectButton();
themeInput.addEventListener('input', changeTheme);
deleteBtn.addEventListener('click', deleteValue);
resetBtn.addEventListener('click', resetValue);
totalBtn.addEventListener('click', showResultValue);
