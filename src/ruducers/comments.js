import {  } from '../constants'
import { comments as defaultComments} from '../fixtures'
export default (comments = defaultComments, action) => {
    const { type, data } = action

    switch (type) {

    }

    return comments
}