import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, _SUCCESS,LOAD_ALL_COMMENTS_BY_ARTICLE } from '../actions/constants'
import SimpleStore from './SimpleStore'

class Comment extends SimpleStore {
    constructor(stores, initialState) {
        super(stores, initialState)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.comment,
                        id: this.generateId()
                    })
                    break;
                case LOAD_ALL_COMMENTS_BY_ARTICLE + _SUCCESS:
                    //stores.comments почему не this?
                    //было не this потому что этот обработчик скорее всего изначально был в articlestore
                    response.forEach(this.__add);
                    break;

            }
        })
    }
}

export default Comment
