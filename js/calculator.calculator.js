/**
 * Created by li_rz on 2016/2/13.
 */
calculator.calculator = (function () {
    var html_element = {},
        formerCalculator = {
            result : null,
            symbol : null,
            if_symbol : false
        },
        getButtonType,
        clearScreen,
        manageNumber,
        manageBackSpace,
        manageSign,
        manageCalculator,
        initElement;

    /**
     * 清屏
     * 依靠参数选择清屏策略
     */
    clearScreen = function () {
        var event = arguments[0];
        if (!event || event === 'clear entry') {
            html_element.screen.innerHTML = 0;
        } else if (event === 'backspace') {
            manageBackSpace();
        } else {
            for (var i in formerCalculator) {
                if (formerCalculator.hasOwnProperty(i)) {
                    formerCalculator[i] = null;
                }
            }
            html_element.screen.innerHTML = 0;
            html_element.equation.innerHTML = '';
        }
    };

    /**
     *
     * @param event -- 数字输入
     * 处理数字输入
     */
    manageNumber = function (event) {
        var element = parseFloat(html_element.screen.innerHTML);
        if (element > 99999999999999 && !formerCalculator.if_symbol) {
            return;
        }
        if (element === 0 || formerCalculator.if_symbol) {
            html_element.screen.innerHTML = event;
            formerCalculator.if_symbol = false;
        }
        else {
            html_element.screen.innerHTML += event;
        }
    };

    /**
     * 处理退格键输入，若屏幕上没有数字直接为0
     */
    manageBackSpace = function () {
        var length = html_element.screen.innerHTML.length;
        if (length === 1) {
            html_element.screen.innerHTML = 0;
        } else if (length) {
            html_element.screen.innerHTML = html_element.screen.innerHTML.substr(0, length - 1)
        }
    };

    /**
     *
     * @param event
     * 处理符号位输入
     */
    manageSign = function (event) {
        var mathSymbol = /^[+\-\*\/]$/;
        console.log('outside');
        if (mathSymbol.test(event)) {
            console.log('event');
            if (!formerCalculator.if_symbol) {
                if (formerCalculator.symbol) {
                    manageCalculator(formerCalculator.symbol);
                } else {
                    formerCalculator.result = parseFloat(html_element.screen.innerHTML);
                }
            }
            formerCalculator.symbol = event;
            formerCalculator.if_symbol = true;
        }
    };

    /**
     * 计算result
     * @param symbol
     */
    manageCalculator = function (symbol) {
        var number = parseFloat(html_element.screen.innerHTML),
            result = parseFloat(formerCalculator.result);
        console.log('symbol' + ':');
        debugger;
        switch (symbol) {
            case '+':
                result += number;
                html_element.screen.innerHTML = result;
                break;
            case '-':
                result -= number;
                html_element.screen.innerHTML = result;
                break;
            case '*':
                result *= number;
                html_element.screen.innerHTML = result;
                break;
            case '/':
                result /= number;
                html_element.screen.innerHTML = result;
                break;
            default:
                break;
        }
        console.log(result);
    };

    getButtonType = function (event) {
        var clear = /^clear/;
        if (typeof event === 'number' || event === '.') {
            manageNumber(event);
        } else if (event === 'backspace' || clear.test(event)) {
            clearScreen(event);
        } else {
            manageSign(event);
        }

    };

    /**
     * 初始化calculator数值
     * @param screen - 计算器屏幕数字
     */
    initElement = function (screen, equation) {
        html_element.screen = screen;
        html_element.equation = equation;
    };

    return {
        initElement : initElement,
        getButtonType : getButtonType
    }
}());