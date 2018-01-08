const Helpers = {

    isEmptyObject: function(obj) {
        for (let i in obj){
            if (obj[i]){
                return false;
            }
        }
        return true
    },

    is_touch_device: function() {
        return (('ontouchstart' in window)
            || (navigator.MaxTouchPoints > 0)
            || (navigator.msMaxTouchPoints > 0));
    },
};

module.exports = Helpers;