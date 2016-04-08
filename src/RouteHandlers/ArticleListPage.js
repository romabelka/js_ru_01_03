import React, { Component, PropTypes } from 'react'
import Counter from './../containers/Counter'
import Articles from './../containers/Articles'

class ArticleListPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Article List Page</h1>
                <Articles />
                {this.props.children}
            </div>
        )
    }
}

export default ArticleListPage