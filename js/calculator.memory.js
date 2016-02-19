/**
 * Created by li_rz on 2016/2/14.
 * 计算器存储器机制
 */

calculator.memory = (function () {
    var memory_element = {
        screen : null,
        memory : null
    },
        memory_save = [],
        getMemoryEvent,
        initModule;


    getMemoryEvent = function (event) {
        if (/^(.*?)save$/i.test(event)) {
            var new_memory_number = parseFloat(memory_element.screen.textContent);
            memory_save.unshift(new_memory_number);
            console.log(memory_save);
        }
    };

    initModule = function (screen, memory) {
        memory_element.screen = screen;
        memory_element.memory = memory;
    };

    return {
        initModule : initModule,
        getMemoryEvent : getMemoryEvent
    }

} ());