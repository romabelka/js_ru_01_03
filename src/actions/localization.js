import { LOCALIZATION } from './constants'
import AppDispatcher from '../dispatcher'

export function changeLang(name) {
    AppDispatcher.dispatch({
        type: LOCALIZATION,
        data: { name }
    })
}