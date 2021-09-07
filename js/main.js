function checkFluency() {
  var checkbox = document.getElementById('InverterEfficiencyPromt');
  var InverterEfficiency = document.getElementById('InverterEfficiency');
  var InverterEfficiencyColor = document.getElementById('InverterEfficiencyColor');
  if (checkbox.checked != true) {
    InverterEfficiency.setAttribute('disabled', 'disabled');
    InverterEfficiency.style.borderColor = "#F1F1F1";
    InverterEfficiencyColor.style.color = "#8A8A8A";
    if (InverterEfficiency.value != null) {
      InverterEfficiency.value = '0.8';
      InverterEfficiency.setAttribute('placeholder', '180');
    }
  }
  else {
    if (InverterEfficiency.value != null) {
      InverterEfficiency.value = '';
    }
    InverterEfficiency.removeAttribute('disabled');
    InverterEfficiency.style.borderColor = "#8A8A8A";
    InverterEfficiency.removeAttribute('placeholder');
    InverterEfficiencyColor.style.color = "#000000";
  }
}
function checkFluencyAkb() {
  var checkboxAkb = document.getElementById('InverterEfficiencyPromtAkb');
  var InverterEfficiencyAkb = document.getElementById('InverterEfficiencyAkb');
  var InverterEfficiencyColorAkb = document.getElementById('InverterEfficiencyColorAkb');
  if (checkboxAkb.checked != true) {
    InverterEfficiencyAkb.setAttribute('disabled', 'disabled');
    InverterEfficiencyAkb.style.borderColor = "#F1F1F1";
    InverterEfficiencyColorAkb.style.color = "#8A8A8A";
    if (InverterEfficiencyAkb.value != null) {
      InverterEfficiencyAkb.value = '0.8';
      InverterEfficiencyAkb.setAttribute('placeholder', '180');
    }
  } else {
    if (InverterEfficiencyAkb.value != null) {
      InverterEfficiencyAkb.value = ' ';
    }
    InverterEfficiencyAkb.removeAttribute('disabled');
    InverterEfficiencyAkb.style.borderColor = "#8A8A8A";
    InverterEfficiencyAkb.removeAttribute('placeholder');
    InverterEfficiencyColorAkb.style.color = "#000000";
  }
}




function calculation() {
  var time = Number(document.getElementById('time').value);
  var v = Number(document.getElementById('v').value);
  var efficiency = Number(InverterEfficiency.value);
  var w = Number(document.getElementById('w').value);
  var results = document.getElementById('results');
  if (w == 0) {
    alert('Введите нагрузку')
  } else if (efficiency == 0) {
    alert('Введите значение КПД инвертора, или переключите в заначение по умолчанию 0,8')
  } else if (time == 0) {
    alert('Введите значение время')
  } else if (v == 0) {
    alert('Введите напряжение')
  } else {
    results.value = (((w / v) / efficiency ) * time).toFixed(2);
    console.log(results.value);
  }
}

function calculationAkb() {
  var wAkb = Number(document.getElementById('wAkb').value);
  var efficiencyAkb = InverterEfficiencyAkb.value;
  var ahAkb = Number(document.getElementById('ahAkb').value);
  var vAkb = Number(document.getElementById('vAkb').value);
  var resultsAkb = document.getElementById('resultsAkb');
  if (wAkb == 0) {
    alert('Введите нагрузку')
  } else if (efficiencyAkb == 0) {
    alert('Введите значение КПД инвертора, или переключите в заначение по умолчанию 0,8')
  } else if (ahAkb == 0) {
    alert('Введите емкость АКБ')
  } else if (vAkb == 0) {
    alert('Введите напряжение')
  } else {
    resultsAkb.value = (((ahAkb * vAkb ) / wAkb) * efficiencyAkb).toFixed(2);
  }
}

var descriptionOpenClosing = document.getElementById('descriptionOpenClosing');
var arrowAnimation = document.querySelector('.ups-calc-arrow')
function openClosingDescr() {
  // arrowAnimation.classList.toggle(".ups-calc-arrow__animation");
  // arrowAnimation.classList.toggle('ups-calc-arrow');
  arrowAnimation.style.transform = "rotate(180deg)";
}
