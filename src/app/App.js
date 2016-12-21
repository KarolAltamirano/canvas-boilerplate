import History from './History';
import Store from './Store';
import AppActions from './actions/AppActions';

import Canvas from './utils/Canvas';
import Circle from './prefab/Circle';
import Square from './prefab/Square';

import router from './router';

const App = {
    init() {
        const el = document.querySelector('.container');
        this.canvas = new Canvas(el);
        this.canvas.loop();

        router(this.canvas, {
            '/': new Circle(this.canvas.ctx),
            '/square': new Square(this.canvas.ctx)
        });

        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            switch (Store.getState().router) {
                // on beginning don't show anything
                case null:
                    break;

                case '/':
                    this.canvas.easeProgress = 0;
                    Store.dispatch(AppActions.router('/square'));
                    break;

                case '/square':
                    this.canvas.easeProgress = 0;
                    Store.dispatch(AppActions.router('/'));
                    break;

                // show 404 page?
                default:
                    break;
            }
        });

        Store.dispatch(AppActions.router(History.location.pathname));
    },

    /**
     * Run application
     */
    run() {
        this.init();
    }
};

export default App;
