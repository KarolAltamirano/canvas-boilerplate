import History from './History';
import Store from './Store';
import AppActions from './actions/AppActions';

import Canvas from './utils/Canvas';
import SceneOne from './scenes/SceneOne';
import SceneTwo from './scenes/SceneTwo';

import router from './router';

const App = {
    /**
     * Run application
     */
    run() {
        const el = document.querySelector('.container');
        this.canvas = new Canvas(el);
        this.canvas.loop();

        router(this.canvas, {
            '/': new SceneOne(this.canvas.ctx),
            '/square': new SceneTwo(this.canvas.ctx)
        });

        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            switch (Store.getState().router) {
                // on beginning don't show anything
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
        });

        Store.dispatch(AppActions.router(History.location.pathname));
    }
};

export default App;
