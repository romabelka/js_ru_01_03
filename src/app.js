import ArticleList from './components/ArticleList'
import fixtures from './fixtures'
import ReactDOM from 'react-dom'
import React from 'react'

console.log('test');

ReactDOM.render(<ArticleList articles = {fixtures} />, document.getElementById('container'))