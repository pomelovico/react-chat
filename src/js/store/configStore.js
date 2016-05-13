/**
 * Created by LikoLu on 2016/4/18.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(rootReducer) {
    return createStoreWithMiddleware(rootReducer);
}