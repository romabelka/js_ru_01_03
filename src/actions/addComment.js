import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from './constants'


export function addComment(articleId, value) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            articleId,value
        }
    })
}