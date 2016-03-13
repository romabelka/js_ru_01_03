import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import CommentList from './CommentList';
import data from '../fixtures';

class Article extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        article: PropTypes.object.isRequired
    }


    componentWillMount() {
        console.log('---', 'going to mount');
    }

    componentDidMount() {
        console.log('---', 'mounted to: ', this.refs.container);
    }

    componentDidUpdate() {
        console.log('---', 'comments', findDOMNode(this.refs.comments));
    }

    onNewComment = (comment) => {
        // должен быть action, но так как пока store нет, размещаю добавление здесь -> просто пушу в комменты
        // и применяю force update

        for ( let item of data ) {
            if ( item.id === this.props.article.id ) {
                comment.id = this.props.article.comments.length + 1;
                this.props.article.comments.push(comment);
            }
        }

        this.forceUpdate();
    };

    render() {
        return (
            <div ref="container">
                <a href = "#" onClick = {this.props.openArticle}>select</a>
                {this.getTitle()}
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return <noscript />
        return (
            <div>
                <p>{article.text}</p>
                <CommentList ref= "comments" onNewComment={this.onNewComment} comments = {article.comments || []} />
            </div>
        )
    }
    getTitle() {
        const { article: { title }, openArticle  } = this.props
        return  (
            <h3 onClick={openArticle}>
                {title}
            </h3>
        )
    }
}

export default Article