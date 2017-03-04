import ActionTypes from '../constants/ActionTypes';
import InitialState from '../constants/InitialState';

/**
 * Router reducer
 */
export default function routerReducer(state = InitialState.router, action) {
    switch (action.type) {
        case ActionTypes.ROUTER:
            return action.router;

        default:
            return state;
    }
}
