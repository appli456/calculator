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
        save_header : document.querySelector('.save-header')
    },
        bower_user_agent = navigator.userAgent,
        IF_WEBKIT = /^(.+)AppleWebKit(.+)$/,
        IF_EDGE = /^(.+)Edge(.+)$/,
        initModule;

    // ----------------------- 变量定义与声明结束 ----------------------


    // ----------------------- 公共方法 --------------------------

    initModule = function () {

        // Webkit系下兼容性问题
        if (IF_WEBKIT.test(bower_user_agent) && !IF_EDGE.test(bower_user_agent)) {
            calculator.style.compatibleWebkit();
        }
        calculator.button.initModule();
    };

    // ----------------------- 公共方法结束 -------------------------

    return {
        initModule : initModule
    }
}());