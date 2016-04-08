import $ from 'jquery'
import { SUCCESS, START, FAIL} from '../constants'

export default store => next => action => {
    if (!action.callAPI) return next(action)
    const { callAPI, type, ...rest} = action
    next({...rest, type: type + START})

    $.get(callAPI)
        .done(response => next({...rest, response, type: type + SUCCESS}))
        .fail(error => next({...rest, error, type: type + FAIL}))
}