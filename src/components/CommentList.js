import React, {Component, PropTypes} from 'react'
import Comment from './Comment'
import toggleOpen from '../HOC/toggleOpen'
import linkedState from 'react-addons-linked-state-mixin'
import {addComment, loadCommentsForArticle} from '../actions/comments'
import undersScore from "underscore"

const CommentList = React.createClass({
    contextTypes: {
        localization: PropTypes.object,
        thisLang: PropTypes.string
    },
    mixins: [linkedState],
    propTypes: {
        article: PropTypes.object
    },
    getInitialState() {
        return {
            comment: '',
            localization: this.context.localization[this.context.thisLang],
            thisLang: this.context.thisLang
        }
    },
    componentWillUpdate(nextProps, nextState,context){
        /* мне не нравится подобная реалиция подскажите как сделать граматно,
         и как функции работающие с state  компонентов выносить, их лучше выносить например в HOC?
         */
        if (!undersScore.isEqual(nextState.localization, context.localization[context.thisLang])) {
            this.setState({
                localization: this.context.localization[this.context.thisLang]
            })
        };
    },
    componentWillReceiveProps(nextProps) {
        const {article, isOpen} = nextProps
        if (article.loadedComments || article.loadingComments) return

        if (isOpen && !this.props.isOpen) loadCommentsForArticle({id: article.id})
    },
    render() {
        const {isOpen, toggleOpen, article, children} = this.props
        const actionText = isOpen ? <span>{this.state.localization.hideComments}</span> :
            <span>{this.state.localization.showComments}</span>;
        return (
            <div>
                {children}
                <a href="#" onClick={toggleOpen}>{actionText}</a>
                {this.getList()}
                {this.getInput()}
            </div>
        )
    },
    getInput() {
        if (!this.props.isOpen) return null
        return <div>
            <input valueLink={this.linkState("comment")}/>
            <a href="#" onClick={this.addComment}>{this.state.localization.addComment}</a>
        </div>
    },
    getList() {
        const {isOpen, article} = this.props
        if (!isOpen) return null
        if (article.loadingComments) return <h3>{this.state.localization.loadingComments}</h3>
        if (!article.loadedComments) return null
        const commentItems = article.getRelation('comments').map((comment) => <li key={comment.id}>
            <Comment comment={comment} localization={this.state.localization}/></li>)
        return <ul>{commentItems}</ul>
    },

    addComment(ev) {
        ev.preventDefault()
        addComment(this.state.comment,this.props.article.id )
        this.setState({
            comment: ''
        })
    }
})

export default toggleOpen(CommentList)