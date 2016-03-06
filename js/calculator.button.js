/**
 * Created by li_rz on 2016/2/13.
 */
calculator.button = (function () {
    var button_element,
        bindButton,
        initModule;

    bindButton = function () {
        [].forEach.call(button_element, function (element){
            element.addEventListener('click', function (event) {
                var button_data = event.target.dataset.buttonType;
                calculator.shell.getEvent(button_data);
            });
        });
    };

    initModule = function (button) {
        button_element = button;
        bindButton();
    };

    return {
        initModule: initModule
    }
}());