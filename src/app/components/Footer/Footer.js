import Mustache from 'mustache';

import template from './footer.html';
import style from './footer.scss';

export default class Footer {
    constructor(el) {
        this.el = el;
        this.container = document.createElement('div');
        this.hide();

        this.el.appendChild(this.container);
    }

    destroy() {
        this.el.removeChild(this.container);
    }

    render(copy) {
        this.container.innerHTML = Mustache.render(template, { style, copy });
    }

    show() {
        this.container.style.display = 'block';
    }

    hide() {
        this.container.style.display = 'none';
    }
}
