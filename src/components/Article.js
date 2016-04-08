import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    static propTypes = {

    };

    render() {
        const { article } = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                <CommentList article = {article} />
            </div>
        )
    }
}

export default Article