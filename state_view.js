/*
 * @author Maxwell Folley
 */
var StateView = function (spec) {
    var that = {};

    that.id = spec.id;
    that.el = (typeof spec.id === "undefined") ? undefined : document.getElementById(spec.id);

    that.setState = function (state) {
        var classes = that.el.className.replace(/state-\S+/, "").replace(/\s+/, ""),
            stateClass = "state-" + state.replace(/ /, "-"),
            stateMethod = "state" + state.replace(/(^\w)|(-\w)/g, function (i) {
                return i.replace("-", "").toUpperCase();
            });

        classes = classes.split(/\s+/);
        classes.push(stateClass);

        that.el.className = classes.join(" ");
        if (typeof that[stateMethod] === "function") {
            that[stateMethod]();
        }
    };

    return that;
};
