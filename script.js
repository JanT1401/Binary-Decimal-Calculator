const binaryInput = document.getElementById('binaryInput');
const decimalInput = document.getElementById('decimalInput');
const headline = document.querySelector('.headline');
let binaryToDecimal = true;

function calculate(){
    if(binaryToDecimal){
        let decimal = 0;
        for(i = 0; i < binaryInput.value.length; i++){
            if(!binaryInput.value[i].includes('0') && !binaryInput.value[i].includes('1')){
                console.error("Error");
            }
            else {
                if(binaryInput.value.split('').reverse().join('').charAt(i) === '1'){
                    decimal += Math.pow(2, i);
                    console.log(i);
                }
            }
        }
        decimalInput.value = decimal;
    }
    else {
        if(typeof(binaryInput.value) !== 'string' || binaryInput.value === ''){
            console.error("Error");
        }
        else {
            let binaryCount;
            let binaryArray = [];
            let binaryResult = parseInt(binaryInput.value);
            let endResult = "";
            for(i = 0; i > -1; i++){
                binaryCount = Math.pow(2, i);
                binaryArray.push(binaryCount);
                if(binaryCount >= parseInt(binaryInput.value) + 1){
                    binaryArray.pop();
                    binaryArray.reverse();
                    console.log(binaryArray);
                    binaryArray.forEach(bin => {
                        if(binaryResult - bin >= 0){
                            binaryResult = binaryResult - bin;
                            console.log(binaryResult);
                            endResult += '1';
                        }
                        else {
                            endResult += '0';
                        }
                    })
                    break;
                }
            }
            decimalInput.value = endResult;
        }
    }
}

function changeMode(){
    if(binaryToDecimal){
        headline.textContent = 'Decimal To Binary';
        binaryInput.placeholder = 'Enter decimal...';
        decimalInput.placeholder = 'Result in binary...';
        binaryToDecimal = false;
    }
    else {
        headline.textContent = 'Binary To Decimal';
        binaryInput.placeholder = 'Enter binary...';
        decimalInput.placeholder = 'Result in decimal...';
        binaryToDecimal = true;
    }
}

addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        calculate();
    }
})