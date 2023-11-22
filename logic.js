


document.addEventListener('DOMContentLoaded', function() {
    let zeroValue = ['0'];
    let counter = 0;
    let unswer = document.querySelector(".unswer");
    unswer.innerHTML = 0;
    const valueArea = document.querySelector(".unswer");
    let num1Button = document.querySelector(".num-1");
    let num2Button = document.querySelector(".num-2");
    let num3Button = document.querySelector(".num-3");
    let num4Button = document.querySelector(".num-4");
    let num5Button = document.querySelector(".num-5");
    let num6Button = document.querySelector(".num-6");
    let num7Button = document.querySelector(".num-7");
    let num8Button = document.querySelector(".num-8");
    let num9Button = document.querySelector(".num-9");
    let num0Button = document.querySelector(".num-0");
    let num00Button = document.querySelector(".num-00");
    

    
    let procPercentButton = document.querySelector(".percent");
    let procCleanButton = document.querySelector(".clean");
    let procMultipleButton = document.querySelector(".multiple");
    let procDivideButton = document.querySelector(".divide");
    let procAddButton = document.querySelector(".add");
    let procSubstractButton = document.querySelector(".substract");
    let procDotButton = document.querySelector(".dot");
    let procEqualButton = document.querySelector(".equal");

    function numberInput(x) {
        if (counter === 0) {
            zeroValue.push(x);
            let value = zeroValue.slice(1).join();
            console.log(value, counter)
            zeroValue = [value];
            console.log(zeroValue);
            unswer.innerHTML = value;
            counter++
            return value;
        } else {
            zeroValue.push(x);
            let value = zeroValue.join('');
            // zeroValue = [value];
            unswer.innerHTML = value;
            console.log(zeroValue);
            counter++
            return value;
        }
    }
    num1Button.addEventListener("click", function() {
        numberInput('1');
    });
    num2Button.addEventListener("click", function() {
        numberInput('2');
    });
    num3Button.addEventListener("click", function() {
        numberInput('3');
    });
    num4Button.addEventListener("click", function() {
        numberInput('4');
    });
    num5Button.addEventListener("click", function() {
        numberInput('5');
    });
    num6Button.addEventListener("click", function() {
        numberInput('6');
    });
    num7Button.addEventListener("click", function() {
        numberInput('7');
    });
    num8Button.addEventListener("click", function() {
        numberInput('8');
    });
    num9Button.addEventListener("click", function() {
        numberInput('9');
    });
    num0Button.addEventListener("click", function() {
        numberInput('0');
    });
    num00Button.addEventListener("click", function() {
        numberInput('00');
    });


    procPercentButton.addEventListener("click", function() {
        if (counter > 0) {
            let percentage = zeroValue[0]/100;
            unswer.innerHTML = percentage;
            console.log(percentage,counter);
            zeroValue = [percentage];
            counter = 1;
        }
    })
    function reset() {
        zeroValue = ['0'];
        counter = 0;
        unswer.innerHTML = 0;
    }
    procCleanButton.addEventListener("click", function() {
        reset()
    })
    procMultipleButton.addEventListener("click", function() {
        zeroValue.push('*');
        unswer.innerHTML = zeroValue.join('');
        console.log(zeroValue, counter)
        counter++;
    })
    procDivideButton.addEventListener("click", function() {
        zeroValue.push('/');
        unswer.innerHTML = zeroValue.join('');
        console.log(zeroValue, counter)
        counter++;
    })
    procAddButton.addEventListener("click", function() {
        zeroValue.push('+');
        unswer.innerHTML = zeroValue.join('');
        console.log(zeroValue, counter)
        counter++;
    })
    procSubstractButton.addEventListener("click", function() {
        zeroValue.push('-');
        unswer.innerHTML = zeroValue.join('');
        console.log(zeroValue, counter)
        counter++;
    })
    procDotButton.addEventListener("click", function() {
        procCheck('.', zeroValue);
        console.log(zeroValue, counter)
        counter++;
    })
    procEqualButton.addEventListener("click", function() {
        if (zeroValue.includes('*')) {
            let index = zeroValue.indexOf('*');
            let z = zeroValue.length
            let firstNumber = zeroValue.slice(0, index).join('');
            console.log(firstNumber);
            let lastNumber = zeroValue.slice(index+1, z).join('')
            console.log(lastNumber);
            let answer = firstNumber * lastNumber;
            zeroValue = [answer];
            console.log(zeroValue);
            unswer.innerHTML = zeroValue;
        } else if (zeroValue[1] === '/') {
            let index = zeroValue.indexOf('/');
            let z = zeroValue.length
            let firstNumber = zeroValue.slice(0, index).join('');
            console.log(firstNumber);
            let lastNumber = zeroValue.slice(index+1, z).join('')
            console.log(lastNumber);
            let answer = firstNumber / lastNumber;
            zeroValue = [answer];
            console.log(zeroValue);
            unswer.innerHTML = zeroValue;
        } else if (zeroValue[1] === '-') {
            let index = zeroValue.indexOf('-');
            let z = zeroValue.length
            let firstNumber = zeroValue.slice(0, index).join('');
            console.log(firstNumber);
            let lastNumber = zeroValue.slice(index+1, z).join('')
            console.log(lastNumber);
            let answer = firstNumber - lastNumber;
            zeroValue = [answer];
            console.log(zeroValue);
            unswer.innerHTML = zeroValue;
        } else if (zeroValue[1] === '+') {
            let index = zeroValue.indexOf('+');
            let z = zeroValue.length
            let firstNumber = zeroValue.slice(0, index).join('');
            console.log(firstNumber);
            let lastNumber = zeroValue.slice(index+1, z).join('');
            console.log(lastNumber);
            let answer = Number(firstNumber) + Number(lastNumber);
            zeroValue = [answer];
            unswer.innerHTML = zeroValue;
            console.log(zeroValue);
        }
    // reset()
    });

})