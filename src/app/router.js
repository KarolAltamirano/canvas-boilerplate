import History from './History';
import Store from './Store';

export default function router(canvas, objects) {
    Store.subscribe(() => {
        // TODO: if router state was not mutated don't do anything
        // TODO: test change of other state and not router state
        switch (Store.getState().router) {
            case '/':
                canvas.removeDisplayObject(objects['/square']);
                canvas.addDisplayObject(objects['/']);
                History.push('/');
                break;

            case '/square':
                canvas.removeDisplayObject(objects['/']);
                canvas.addDisplayObject(objects['/square']);
                History.push('/square');
                break;

            default:
                break;
        }
    });
}
