import Store from './Store';
import AppActions from './actions/AppActions';

const Control = {
    keys: {},

    keycode: {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    },

    init() {
        this.keys = Object.keys(this.keycode).reduce((prev, curr) => (
            Object.assign({}, prev, { [this.keycode[curr]]: false })
        ), {});

        this.click = this.click.bind(this);
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);

        document.body.addEventListener('click', this.click);
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
    },

    click(e) {
        e.preventDefault();

        switch (Store.getState().router) {
            case null:
                break;

            case '/':
                Store.dispatch(AppActions.router('/square'));
                break;

            case '/square':
                Store.dispatch(AppActions.router('/'));
                break;

            default:
                break;
        }
    },

    handleKey(value, e) {
        // e.preventDefault();

        if ({}.hasOwnProperty.call(this.keys, e.keyCode)) {
            return;
        }

        this.keys[this.keycode[e.keyCode]] = value;
    },

    keyDown(e) {
        this.handleKey(true, e);
    },

    keyUp(e) {
        this.handleKey(false, e);
    }
};

export default Control;
