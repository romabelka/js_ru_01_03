import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import AddComment from './AddComment'
import toggleOpen from '../HOC/toggleOpen'

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCommentAddition: false
        }
    }

    static propTypes = {
        comments: PropTypes.array
    };

    addComment = (e) => {
        e.preventDefault();
        this.setState({showCommentAddition: true});
    };

    onCancelComment = () => {
        this.setState({showCommentAddition: false});
    };

    render() {
        const { isOpen, comments, toggleOpen, onNewComment } = this.props
        const actionText = isOpen ? 'hide comments' : 'show comments'

        const commentItems = comments.map((comment) => <li key={comment.id}><Comment comment = {comment}/></li>)
        return (
            <div>
                <a href = "#" onClick = {toggleOpen}>{actionText}</a>
                <ul>{isOpen ? commentItems : null}</ul>

                <a href="#" onClick={this.addComment}
                   style={{display: (this.state.showCommentAddition? 'none': 'inline-block')}}
                >
                    add comment
                </a>
                {
                    ( this.state.showCommentAddition?
                        <AddComment onNewComment={onNewComment} cancel={this.onCancelComment}/>
                        :
                        null
                    )
                }
            </div>
        )
    }
}

export default toggleOpen(CommentList)