import React, { Component, PropTypes } from 'react'

class ArticleListPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Article List Page</h1>
                {this.props.children}
            </div>
        )
    }
}

export default ArticleListPage