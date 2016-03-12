import React, { PropTypes } from 'react'

const Comment = (props) => {
    return (
        <div>
            <p>{props.comment.text}</p>
        </div>
    )
};

Comment.propTypes = {
    comment: PropTypes.object
};

export default Comment;