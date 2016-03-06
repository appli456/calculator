/**
 * Created by li_rz on 2016/2/12.
 * calculator.shell 调用层
 */
calculator.shell = (function () {

    // ----------------------- 变量定义与声明 ----------------------
    var html_element = {
        screen : document.querySelector('.number span'),
        equation : document.querySelector('.equation-content span'),
        history : document.querySelector('.save-history'),
        memory : document.querySelector('.save-memory'),
        save_header : document.querySelector('.save-header'),
        button : document.querySelectorAll('button')
    },
        button_type = {
            bars : 'bars',
            history : 'history',
            trash : 'trash',
            memoryClear : 'memory-clear',
            memoryRead : 'memory-read',
            memoryAdd : 'memory-add',
            memorySub : 'memory-sub',
            memorySave : 'memory-save',
            memory : 'memory',
            percent : 'percent',
            squareRoot : 'square root',
            square : 'square',
            cube : 'cube',
            inverse : 'inverse',
            clearEntry : 'clear entry',
            clear : 'clear',
            backspace : 'backspace',
            addition : '+',
            subtraction : '-',
            multiplication : '*',
            division : '/',
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
            positiveNegative : 'positive negative',
            radixPoint : '.',
            result : 'result'
        },
        IF_MEMORY = /^(memory)(.*?)$/,
        event_queue = [],
        bower_user_agent = navigator.userAgent,
        IF_WEBKIT = /^(.+)AppleWebKit(.+)$/,
        IF_EDGE = /^(.+)Edge(.+)$/,
        getEvent,
        dealEvent,
        initModule;

    // ----------------------- 变量定义与声明结束 ----------------------

    getEvent = function (button_data) {
        event_queue.push(button_data);
        for (;event_queue.length;) {
            dealEvent(button_data);
        }
    };

    dealEvent = function () {
        if (event_queue.length) {
            if (event_queue[0] === 'bars' || event_queue[0] === 'history' || event_queue[0] === 'trash') {
                calculator.interface.getEvent(event_queue.shift());
            }
            else if (IF_MEMORY.test(event_queue[0])) {
                calculator.memory.getMemoryEvent(event_queue.shift());
            } else {
                calculator.calculator.getButtonType(button_type[event_queue.shift()]);
            }
        }
    };

    // ----------------------- 公共方法 --------------------------

    initModule = function () {

        // Webkit系下兼容性问题
        if (IF_WEBKIT.test(bower_user_agent) && !IF_EDGE.test(bower_user_agent)) {
            calculator.style.compatibleWebkit();
        }
        calculator.button.initModule(html_element.button);
        calculator.memory.initModule(html_element.screen, html_element.memory);
        calculator.calculator.initElement(html_element.screen, html_element.equation);
    };

    // ----------------------- 公共方法结束 -------------------------

    return {
        getEvent : getEvent,
        initModule : initModule
    }
}());