import ReactDOM from 'react-dom'
import React from 'react'
import store from './store'
import Counter from './components/Counter'

function rerender() {
    ReactDOM.render(<Counter count={store.getState()} />, document.getElementById('container'))
}

rerender()

store.subscribe(rerender)