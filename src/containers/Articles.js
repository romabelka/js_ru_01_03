import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticle, loadAllArticles } from '../actions/articles'
import Article from '../components/Article'

class Articles extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        const { articles } = this.props
        if (articles.loading) return <h1>Loading</h1>
        const items = articles.entities.map((article) =>
            <li key = {article.id}>
                <Article article={article} />
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
    deleteArticle, loadAllArticles
})(Articles)