import { createStore } from 'redux'
import reducer from '../ruducers'

const store = createStore(reducer)
window.store = store

export default store