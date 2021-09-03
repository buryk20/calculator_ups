function checkFluency(){
var checkbox = document.getElementById('InverterEfficiencyPromt');
var InverterEfficiency = document.getElementById('InverterEfficiency');
var InverterEfficiencyColor = document.getElementById('InverterEfficiencyColor');
        if (checkbox.checked != true){
            InverterEfficiency.setAttribute('disabled', 'disabled');
            InverterEfficiency.style.borderColor = "#F1F1F1";
            InverterEfficiencyColor.style.color = "#8A8A8A";
            if(InverterEfficiency.value != null) {
                InverterEfficiency.value = '0.8';
                InverterEfficiency.setAttribute('placeholder', '180');
            }
    } else {
        if(InverterEfficiency.value != null) {
            InverterEfficiency.value = ' ';
        }
        InverterEfficiency.removeAttribute('disabled');
        InverterEfficiency.style.borderColor = "#8A8A8A";
        InverterEfficiency.removeAttribute('placeholder');
        InverterEfficiencyColor.style.color = "#000000";
    }
  }
    
  



  function calculation () {
    var time = Number(document.getElementById('time').value);
    var v  = Number(document.getElementById('v').value);
    var efficiency = Number(InverterEfficiency.value);
    var w = Number(document.getElementById('w').value);
    var results = document.getElementById('results');
    
    
    results.value = ((time*v)/efficiency)/w;
     
    // console.log(a);
  }

//   console.log(a);