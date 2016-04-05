import { createStore } from 'redux'
import counter from '../ruducers/counter'

const store = createStore(counter)
window.store = store

export default store