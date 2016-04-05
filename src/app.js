import ReactDOM from 'react-dom'
import React from 'react'
import store from './store'
import Counter from './components/Counter'
import { increment } from './actions/counter'

const wrappedIncrement = () => store.dispatch(increment())

function rerender() {
    ReactDOM.render(<Counter count={store.getState()} increment = {wrappedIncrement} />, document.getElementById('container'))
}


rerender()

store.subscribe(rerender)