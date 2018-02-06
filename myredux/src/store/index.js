import {createStore,applyMiddleware,compose} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

let composeEnhancers  = compose
const middleware = [ thunk ]

export default function configureStore(initialState) {
    const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(...middleware)))
    return store
}