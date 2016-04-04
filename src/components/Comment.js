import React, { Component, PropTypes } from 'react'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    };

    static contextTypes = {
        user: PropTypes.string
    }

    render() {
        const {localization} = this.props;
        return (
            <div>
                {localization.currentUser} {this.context.user}
                <p>{this.props.comment.text}</p>
            </div>
        )
    }
}

export default Comment