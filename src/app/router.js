import History from './History';
import Store from './Store';

let prevRoute = null;

export default function router(canvas, scenes) {
    Store.subscribe(() => {
        const nextRoute = Store.getState().router;

        if (prevRoute === nextRoute) {
            return;
        }

        prevRoute = nextRoute;

        if (Object.keys(scenes).indexOf(nextRoute) === -1) {
            canvas.removeScene();
            return;
        }

        canvas.showScene(scenes[nextRoute]);
        History.push(nextRoute);
    });
}
