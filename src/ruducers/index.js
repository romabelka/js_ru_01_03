import { combineReducers } from 'redux'
import articlesReducer from './articles'
import counterReducer from './counter'
import commentReducer from './comments'

export default combineReducers({
    articles: articlesReducer,
    comments: commentReducer,
    count: counterReducer
})
