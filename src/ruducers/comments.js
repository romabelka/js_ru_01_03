import {  } from '../constants'
import { comments as defaultComments} from '../fixtures'
import {defaultState} from '../utils'

export default (comments = {...defaultState, entities: defaultComments}, action) => {
    const { type, data } = action

    switch (type) {

    }

    return comments
}