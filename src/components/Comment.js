import React from 'react'

export default (props) => {
    console.log(props);
    const {comment} = props
    return (
        <div>
            <p>{comment.text}</p>
        </div>
    )
}


