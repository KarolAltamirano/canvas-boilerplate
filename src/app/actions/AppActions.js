import ActionTypes from '../constants/ActionTypes';

/**
 * App actions
 *
 * @type {Object}
 */
const AppActions = {
    /**
     * Router action
     *
     * @param  {string} r route
     *
     * @return {string}   router action
     */
    router(r) {
        return {
            type: ActionTypes.ROUTER,
            router: r
        };
    }
};

export default AppActions;
