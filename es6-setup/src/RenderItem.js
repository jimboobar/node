
export default class MovableBox {

    constructor(element) {
        this.el = element;
        this.el.style['user-select'] = 'none';
        this.el.style.display = 'inline-block';
        this.el.style.border = '3px solid black';
        this.clicked = 0;
        this.setupListeners();
    }

    setupListeners() {
        this.el.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        this.clicked++;
        this.render();
    }

    render() {
        this.el.innerHTML = [
            "Clicked: ",
            this.clicked,
            " times"
        ].join('');

    }

}
