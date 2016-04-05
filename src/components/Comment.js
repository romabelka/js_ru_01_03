import React, { Component, PropTypes } from 'react'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    };

    static contextTypes = {
        user: PropTypes.string
    }

    render() {
        return (
            <div>
                <p>{this.props.comment.text}</p>
            </div>
        )
    }
}

export default Comment