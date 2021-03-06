import History from './History';
import Store from './Store';
import Control from './Control';
import AppActions from './actions/AppActions';

import Canvas from './utils/Canvas';
import SceneOne from './scenes/SceneOne';
import SceneTwo from './scenes/SceneTwo';

import router from './router';

import copy from '../copy/copy.json';
import Footer from './components/Footer/Footer';

const App = {
    /**
     * Run application
     */
    run() {
        // render footer
        const footer = new Footer(document.body);
        footer.render({ msg: copy.msg });
        footer.show();

        // init control
        Control.init();

        // create canvas
        const el = document.querySelector('.container');
        this.canvas = new Canvas(el);
        this.canvas.loop();

        router(this.canvas, {
            '/': new SceneOne(this.canvas.ctx),
            '/square': new SceneTwo(this.canvas.ctx)
        });

        Store.dispatch(AppActions.router(History.location.pathname));
    }
};

export default App;
