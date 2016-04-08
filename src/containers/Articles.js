import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../actions/articles'

class Articles extends Component {
    static propTypes = {

    };

    render() {
        const { articles } = this.props
        const items = articles.map((article) =>
            <li key = {article.id}>
                {article.title}
                |
                <a href="#" onClick = {this.handleDelete(article.id)}> delete this article</a>
            </li>
        )
        return (
            <ul>
                {items}
            </ul>
        )
    }

    handleDelete = id => ev => {
        ev.preventDefault()
        this.props.deleteArticle(id)
    }
}

export default connect((state) => {
    const { articles } = state
    return { articles }
}, {
    deleteArticle
})(Articles)