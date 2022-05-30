AFRAME.registerComponent("clicker", {
    init: function() {
        let el = this.el;
        this.toggleFunc = function() {
            alert(`let's show something`);
        }
        this.el.addEventListener("click", this.toggleFunc);

    },
    remove: function() {
        this.el.removeEventListener("click", this.toggleFunc);
    }
})
