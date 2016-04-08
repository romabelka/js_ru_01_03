import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'
import {defaultState} from '../utils'

export default (articles = defaultState, action) => {
    const { type, data, response } = action

    switch (type) {
        case DELETE_ARTICLE: return articles.filter(article => article.id != data.id)
        case LOAD_ALL_ARTICLES + START: return {...articles, loading: true}
        case LOAD_ALL_ARTICLES + SUCCESS: return {...articles, loading: false, loaded: true, entities: response}
    }

    return articles
}