import AppDispatcher from '../dispatcher'
import { LOCALIZATION } from '../actions/constants'
import SimpleStore from './SimpleStore'

class LocalizationStore extends SimpleStore {
    constructor(stores, initialState) {
        super(stores, initialState)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case LOCALIZATION:
                    this.currentLang = data.name
                    
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getCurrentLang() {
        if (!this.currentLang) return 'rus'
        return this.currentLang
    }

}

export default LocalizationStore