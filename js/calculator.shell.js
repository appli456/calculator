/**
 * Created by li_rz on 2016/2/12.
 * calculator.shell 调用层
 */
calculator.shell = (function () {

    // ----------------------- 变量定义与声明 ----------------------
    var bower_user_agent = navigator.userAgent,
        IF_WEBKIT = /^(.+)AppleWebKit(.+)$/,
        IF_EDGE = /^(.+)Edge(.+)$/,
        initModule;

    // ----------------------- 变量定义与声明结束 ----------------------


    // ----------------------- 公共方法 --------------------------

    initModule = function () {
        if (IF_WEBKIT.test(bower_user_agent) && !IF_EDGE.test(bower_user_agent)) {
            calculator.style.initModule();
        }
        calculator.button.initModule();
    };

    // ----------------------- 公共方法结束 -------------------------

    return {
        initModule : initModule
    }
}());