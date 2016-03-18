import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../HOC/toggleOpen'
import linkedState from 'react-addons-linked-state-mixin'
import { addComment } from '../actions/addComment'


const CommentList = React.createClass({
    mixins: [linkedState],
    propTypes: {
        comments: PropTypes.array
    },
    getInitialState() {
        return {
            comment: ''
        }
    },
    articleId: null,
    render() {
        const { isOpen, comments, toggleOpen,article } = this.props
        this.articleId = article.id;
        const actionText = isOpen ? 'hide comments' : 'show comments'

        const commentItems = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>)
        return (
            <div>
                <a href="#" onClick={toggleOpen}>{actionText}</a>
                <ul>{isOpen ? commentItems : null}</ul>
                {this.getInput()}
            </div>
        )
    },
    addCommentHandler(ev){
        //можно просто this.state.comment
        const addCommentValue = this.linkState("comment");
        ev.preventDefault()
        addComment(this.articleId, addCommentValue.value);

    },
    getInput() {
        if (!this.props.isOpen) return null
        return <div>
            <input valueLink={this.linkState("comment")}/>
            <a href="#" onClick={this.addCommentHandler}>add comment</a>
        </div>
    }
})

export default toggleOpen(CommentList)
