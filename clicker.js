AFRAME.registerComponent("clicker", {
    schema: {
        // clicked: { type: "number", default: 0 }
    },
    init: function() {
        this.clicked = false;
        let toggleFunc = (e) => {
            try {
                if (this.clicked) return;
                this.clicked = true;
                alert(`let's show something`);
            }
            catch(e) { alert(e) }
        }
        this.toggleFunc = toggleFunc.bind(this);
        this.el.addEventListener("click", this.toggleFunc);

    },
    update: function(oldData) {

    },
    remove: function() {
        this.el.removeEventListener("click", this.toggleFunc);
    }
})
