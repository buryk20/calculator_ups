window.onload = function() {
  const selector = document.querySelectorAll('[data-selector]');
  const inputSelector = document.querySelectorAll('[data-input-selector]');

  selector.forEach((el, index) => {
    el.addEventListener('click', () => {
      let statusSel = inputSelector[index];
      statusSel.disabled === true ? (statusSel.disabled = false, statusSel.classList.add('active')) : (statusSel.disabled = true, statusSel.classList.remove('active'));
    })
  });

  const inputWrp = document.querySelectorAll('[data-input-wrp]');
  const btn = document.querySelectorAll('[data-btn]');
  let inputValue = [];
  let input = [];
  let res;

  btn.forEach((el, index) => {
    el.addEventListener('click', () => {
      delArr(input);
      delArr(inputValue);
      inputValue.splice(0, inputValue.length);
      console.log(inputWrp[index].querySelectorAll('input'));
      inputWrp[index].querySelectorAll('input').forEach(el => {
        if(el.value === '') {
          alert(`Заполните поле ${el.title}`);
          return false;
        }
        inputValue.push(Number(el.value));
        input.push(el)
      });
      console.log(input);
      console.log(inputValue);
      inputValue[2] > 1 ? res = inputValue[0] / inputValue[4] * inputValue[3]/(inputValue[2]/100) : res = inputValue[0] / inputValue[4] * inputValue[3]/inputValue[2];
      input[5].value = res;
    })
  });

  function delArr(arr) {
    arr.splice(0, arr.length);
  }
}
