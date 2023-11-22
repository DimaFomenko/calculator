


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

    function procCheck(input, arr) {
        let x = arr.length-1; 
        let y = arr.length-2;
        if (['+','-','*','/'].includes(arr[x]) && ['+','-','*','/'].includes(input)) {
            arr[y,x] = input;
            return arr;
        } else if (arr[x] === '.' && input === '.') {
            arr[x] = input;
            return arr;
        } else {
            arr.push(input);
            return arr;
        }
    }

    num1Button.addEventListener("click", function() {
        zeroValue.push('1');
        zeroValue.join('');
        console.log(zeroValue, counter)
        counter++;
    });
    num2Button.addEventListener("click", function() {
        zeroValue.push('2');
        console.log(zeroValue, counter)
        counter++;
    });
    num3Button.addEventListener("click", function() {
        zeroValue.push('3');
        console.log(zeroValue, counter)
        counter++;
    });
    num4Button.addEventListener("click", function() {
        zeroValue.push('4');
        console.log(zeroValue, counter)
        counter++;
    });
    num5Button.addEventListener("click", function() {
        zeroValue.push('5');
        console.log(zeroValue, counter)
        counter++;
    });
    num6Button.addEventListener("click", function() {
        zeroValue.push('6');
        console.log(zeroValue, counter)
        counter++;
    });
    num7Button.addEventListener("click", function() {
        zeroValue.push('7');
        console.log(zeroValue, counter)
        counter++;
    });
    num8Button.addEventListener("click", function() {
        zeroValue.push('8');
        console.log(zeroValue, counter)
        counter++;
    });
    num9Button.addEventListener("click", function() {
        zeroValue.push('9');
        console.log(zeroValue, counter)
        counter++;
    });
    num0Button.addEventListener("click", function() {
        zeroValue.push('0');
        console.log(zeroValue, counter)
        counter++;
    });
    num00Button.addEventListener("click", function() {
        zeroValue.push('00');
        console.log(zeroValue, counter)
        counter++;
    });


    procPercentButton.addEventListener("click", function() {
        if (counter > 0) {
            let percentage = (zeroValue.slice(1).join(''))/100;
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
        let firstNumber = zeroValue.slice(1, zeroValue.length).join('')
        procCheck('*', zeroValue);
        zeroValue = [firstNumber, '*']
        unswer.innerHTML = zeroValue;
        console.log(zeroValue, counter)
        counter++;
    })
    procDivideButton.addEventListener("click", function() {
        let firstNumber = zeroValue.slice(1, zeroValue.length).join('')
        procCheck('/', zeroValue);
        console.log(zeroValue, counter)
        zeroValue = [firstNumber, '/']
        unswer.innerHTML = zeroValue;

        counter++;
    })
    procAddButton.addEventListener("click", function() {
        let firstNumber = zeroValue.slice(1, zeroValue.length).join('')
        procCheck('+', zeroValue);
        console.log(zeroValue, counter)
        zeroValue = [firstNumber, '+']
        unswer.innerHTML = zeroValue;
        
        counter++;
    })
    procSubstractButton.addEventListener("click", function() {
        let firstNumber = zeroValue.slice(1, zeroValue.length).join('')
        procCheck('-', zeroValue);
        zeroValue = [firstNumber, '-']
        unswer.innerHTML = zeroValue;
        console.log(zeroValue, counter)
        counter++;
    })
    procDotButton.addEventListener("click", function() {
        procCheck('.', zeroValue);
        console.log(zeroValue, counter)
        counter++;
    })
    procEqualButton.addEventListener("click", function() {
        if (zeroValue[1] === '*') {
            let lastNumber = zeroValue.slice(2, zeroValue.length).join('')
            let answer = zeroValue[0] * lastNumber;
            zeroValue = [answer];
            console.log(zeroValue);
            unswer.innerHTML = zeroValue;
        } else if (zeroValue[1] === '/') {
            let lastNumber = zeroValue.slice(2, zeroValue.length).join('')
            let answer = zeroValue[0] / lastNumber;
            zeroValue = [answer];
            unswer.innerHTML = zeroValue;
            console.log(zeroValue);
        } else if (zeroValue[1] === '-') {
            let lastNumber = zeroValue.slice(2, zeroValue.length).join('')
            let answer = zeroValue[0] - lastNumber;
            zeroValue = [answer];
            unswer.innerHTML = zeroValue;
            console.log(zeroValue);
        } else if (zeroValue[1] === '+') {
            let lastNumber = zeroValue.slice(2, zeroValue.length).join('')
            let answer = zeroValue[0] + lastNumber;
            zeroValue = [answer];
            unswer.innerHTML = zeroValue;
            console.log(zeroValue);
        }
    
    // reset()
    });

})