import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT, _START, _SUCCESS, _FAIL, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID,LOAD_ALL_COMMENTS_BY_ARTICLE } from '../actions/constants'
import SimpleStore from './SimpleStore'
import { loadAllArticles } from '../actions/articles'

class ArticleStore extends SimpleStore {
    constructor(stores, initialState) {
        super(stores, initialState)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    break;

                case ADD_COMMENT:
                    AppDispatcher.waitFor([stores.comments.dispatchToken])
                    const article = this.getById(data.articleId)
                    article.comments = (article.comments || []).concat(stores.comments.getCurrentId())
                    break;

                case LOAD_ALL_ARTICLES + _START:
                    this.loading = true
                    break;

                case LOAD_ALL_ARTICLES + _SUCCESS:
                    response.forEach(this.__add)

                    this.loading = false
                    this.loaded = true
                    break;

                case LOAD_ALL_ARTICLES + _FAIL:
                    this.error = error
                    this.loaded = false
                    this.loading = false
                    break;

                case LOAD_ARTICLE_BY_ID + _START:
                    this.getById(data.id).loading = true;
                    break;

                case LOAD_ARTICLE_BY_ID + _SUCCESS:
                    this.__update({...response, loading: false, loaded: true})
                    break;
                case LOAD_ALL_COMMENTS_BY_ARTICLE + _START:
                    this.getById(data.id).loadingComment = true;
                    break;
                case LOAD_ALL_COMMENTS_BY_ARTICLE + _SUCCESS:
                    AppDispatcher.waitFor([stores.comments.dispatchToken])
                    this.__update({...this.getById(data.id), loadingComment: false, loadedComment: true})
                    /** не получилось вынести this.emitChange вконец свича не работает если вынести , как в этом месте лучше поступить**/
                    this.emitChange()
                    break;
                case LOAD_ALL_COMMENTS_BY_ARTICLE + _FAIL:
                    this.error = error
                    this.loadingComment = false
                    this.loadedComment = false
                    break;

                default:
                    return
            }
            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loaded && !this.loading) loadAllArticles()
        return this.getAll()
    }
}

export default ArticleStore