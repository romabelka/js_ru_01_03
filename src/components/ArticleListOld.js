import React from 'react'
import Article from './Article'
import openArticle from '../mixins/openArticle'

export default React.createClass({
    mixins: [openArticle],

    render() {
        const articles = this.props.articles.map((article) =>
            <li key={article.id}>
                <Article article={article}
                         openArticle = {this.openArticle(article.id)}
                         isOpen = {article.id === this.state.openArticleId}/>
            </li>
        );

        return (
            <div>
                <ul>
                    {articles}
                </ul>
            </div>
        )
    }
});