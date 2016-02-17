/**
 * Created by li_rz on 2016/2/13.
 */
calculator.button = (function () {
    var button = document.querySelectorAll('button'),
        button_type = {
            bars : 'bars',
            history : 'history',
            memoryClear : 'memory-clear',
            memoryRead : 'memory-read',
            memoryAdd : 'memory-add',
            memorySub : 'memory-sub',
            memorySave : 'memory-save',
            memory : 'memory',
            percent : 'percent',
            squareRoot : 'square-root',
            square : 'square',
            cube : 'cube',
            inverse : 'inverse',
            clearEntry : 'clear-entry',
            clear : 'clear',
            backspace : 'backspace',
            addition : 'addition',
            subtraction : 'subtraction',
            multiplication : 'multiplication',
            division : 'division',
            zero : 0,
            one : 1,
            two : 2,
            three : 3,
            four : 4,
            five : 5,
            six : 6,
            seven : 7,
            eight : 8,
            nine : 9,
            positiveNegative : 'positive-negative',
            radixPoint : 'radix-point',
            result : 'result'
        },
        IF_MEMORY = /^(memory).+$/,
        bindButton,
        initModule;

    bindButton = function () {
        [].forEach.call(button, function (element){
            element.addEventListener('click', function (event) {
                var button_data = event.target.dataset.buttonType;
                console.log(button_data);
                if (IF_MEMORY.test(button_data)) {
                    calculator.memory.getMemoryEvent(button_data);
                } else {
                    calculator.calculator.getButtonType(button_data);
                }
            });
        });
    };

    initModule = function () {
        bindButton();
    };

    return {
        initModule: initModule
    }
}());