import { createStore, applyMiddleware } from 'redux'
import reducer from '../ruducers'
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store