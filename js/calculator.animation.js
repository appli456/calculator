/**
 * Created by li_rz on 2016/2/19.
 * 动画库
 */

calculator.animation = (function () {
    var initAnimation;

    initAnimation = function () {
        window.requestAnimationFrame = (function () {
            return  window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    }
        });

        window.cancelAnimationFrame = (function () {
            return  window.cancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.msCancelAnimationFrame ||
                    window.oCancelAnimationFrame ||
                    function (id) {
                        window.clearTimeout(id);
                    }
        })

    };


    return {
        initAnimation : initAnimation
    }
});