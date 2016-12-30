import History from './History';
import Store from './Store';

export default function router(canvas, scenes) {
    Store.subscribe(() => {
        // TODO: if router state was not mutated don't do anything
        // TODO: test change of other state and not router state
        switch (Store.getState().router) {
            case '/':
                canvas.showScene(scenes['/']);
                History.push('/');
                break;

            case '/square':
                canvas.showScene(scenes['/square']);
                History.push('/square');
                break;

            default:
                canvas.removeScene();
                break;
        }
    });
}
