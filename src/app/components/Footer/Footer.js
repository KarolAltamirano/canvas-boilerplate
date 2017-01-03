import Mustache from 'mustache';

import template from './footer.html';
import style from './footer.scss';

export default class Footer {
    constructor(parent) {
        this.container = document.createElement('div');
        this.hide();

        parent.appendChild(this.container);
    }

    destroy() {
        parent.removeChild(this.container);
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
