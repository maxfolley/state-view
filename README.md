state_view.js
=============

A simple functional pattern for setting states.

Usage
-----

    var MyView = function (spec) {
        var that = StateView(sec);
        
        that.stateOpen = function () {
        }

        return that;
    };

    /* 
     * Setting the state invokes the stateOpen function on the view (optional)
     * It also sets a css class on the element, "state-open" so you can do awesome
     * stuff like run css transitions based on states :)
     */
    var view = MyView({id: "#test"});
    view.setState("open");
