import AppDispatcher from '../dispatcher'
import { loadById } from './api/comments'
import { asyncAC } from './api/utils'
import { ADD_COMMENT, LOAD_ALL_COMMENTS_BY_ARTICLE } from './constants'

export function addComment(comment, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {comment, articleId}
    })
}

export const loadCommentsById = asyncAC(loadById, LOAD_ALL_COMMENTS_BY_ARTICLE)