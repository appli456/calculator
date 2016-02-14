/**
 * Created by li_rz on 2016/1/17.
 * 主函数接入口，所有方法集成于全局变量calculator
 */
var calculator = (function () {
    'use strict';

    var initModule = function () {
        calculator.shell.initModule();
    };

    return {
        initModule : initModule
    }
}());

document.addEventListener('DOMContentLoaded', function () {
    console.log(calculator);
    calculator.initModule();
});


