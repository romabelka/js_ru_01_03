import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, SUCCESS, START, FAIL } from '../constants'
import $ from 'jquery'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        data: { id }
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadAllArticlesFluxStyle() {
    return (dispatch) => {

        dispatch({
            type: LOAD_ALL_ARTICLES + START
        })

        $.get('/api/article')
            .done(response => dispatch({
                type: LOAD_ALL_ARTICLES + SUCCESS,
                response
            }))
            .fail(error => dispatch({
                type: LOAD_ALL_ARTICLES + FAIL,
                error
            }))
    }
}