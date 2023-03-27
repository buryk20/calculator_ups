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
  let resTime;

  btn.forEach((el, index) => {
    el.addEventListener('click', () => {
      delArr(input);
      delArr(inputValue);
      inputWrp[index].querySelectorAll('input').forEach(el => {
        if(el.value === '') {
          alert(`Заполните поле ${el.title}`);
          return false;
        }
        inputValue.push(Number(el.value));
        input.push(el)
      });
      index === 0 ?
      (res = inputValue[0] / inputValue[4] * inputValue[3] / (inputValue[2] > 1 ? inputValue[2]/100 : inputValue[2])) : (resTime = ((inputValue[3] * inputValue[4]) / inputValue[0]) / (inputValue[2] > 1 ? inputValue[2]/100 : inputValue[2]));
      calcTime(resTime);
      index === 0 ? input[5].value = res.toFixed(2) : input[5].value = resTime;
    })
  });

  function delArr(arr) {
    arr.splice(0, arr.length);
  }

  function calcTime(par) {
    return resTime = `${Math.floor(par)}h${Math.floor((par - Math.floor(Number(par))) * 60)}min`;
  }
}
