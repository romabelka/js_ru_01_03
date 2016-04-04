import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from './CommentList'
import {deleteArticle, loadArticleById} from '../actions/articles'
import undersScore from "underscore"



function isEqual(obj1, obj2) {
    //todo implement
    return false
}

class Article extends Component {

    constructor() {
        super();
        this.state = {
            localization: {}
        }
    }

    static contextTypes = {
        localization: PropTypes.object,
        thisLang: PropTypes.string
    }
    static propTypes = {
        isOpen: PropTypes.bool,
        article: PropTypes.object.isRequired
    }

    componentWillMount() {
        this.setState({
            localization: this.context.localization[this.context.thisLang]
        })
    }

    componentWillUpdate(nextProps, nextState,context){
        /* мне не нравится подобная реалиция подскажите как сделать граматно,
         и как функции работающие с state  компонентов выносить, их лучше выносить например в HOC?
         */
        if (!undersScore.isEqual(nextState.localization, context.localization[context.thisLang])) {
            this.setState({
                localization: this.context.localization[this.context.thisLang]
            })
        };
    }


    render() {
        return (
            <div ref="container">
                <a href="#" onClick={this.handleDelete}>{this.state.localization.deleteArticle}</a>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props)
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }

    getBody() {
        const {article, isOpen} = this.props
        if (article.loading) return <h3>{this.state.localization.load}</h3>
        return (
            <div>
                <p>{article.text}</p>
                {this.getCommentList()}
            </div>
        )
    }

    getCommentList() {
        return <CommentList ref="comments"
                            article={this.props.article}
        >
            <h3>{this.state.localization.commentsForArticle} {this.props.article.id}</h3>
        </CommentList>
    }

    addComment = (comment) => {
       
        addComment(comment, this.props.article.id)
    }

    getTitle() {
        const {article: {title}, openArticle} = this.props
        return (
            <h3 onClick={openArticle}>
                {title}
            </h3>
        )
    }
}

export default Article