import React, { Component, PropTypes } from 'react'
import CommentList from './../CommentList'
require('./style.css')

class Article extends Component {
    static propTypes = {

    };

    render() {
        const { article } = this.props
        return (
            <div class="article">
                <h3>{article.title}</h3>
                <CommentList article = {article} />
            </div>
        )
    }
}

export default Article