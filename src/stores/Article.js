import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE,ADD_COMMENT } from '../actions/constants'
import SimpleStore from './SimpleStore'


class ArticleStore extends SimpleStore {
    constructor(stores, initialState) {
        super(stores, initialState)
        AppDispatcher.register((action) => {
            const { type, data } = action
            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    this.emitChange()
                    break;
                case ADD_COMMENT:
                    const commentsSize = stores.comments.__items.length;
                    stores.comments.__add({
                        "id": commentsSize,
                        "name": "test",
                        "text": data.value
                    })
                    /* Вопрос, вы говорили что не стоит испозовать push, вот этом месте тоже не стоит использовать? */
                    this.getById(data.articleId).comments.push(commentsSize);
                    this.emitChange()
                    break;
            }
        })
    }
}

export default ArticleStore