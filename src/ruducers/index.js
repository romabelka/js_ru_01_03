import { combineReducers } from 'redux'
import articles from './articles'
import counter from './counter'

export default combineReducers({
    articles: articles,
    count: counter
})
