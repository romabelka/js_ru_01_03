import React, {Component} from 'react'

export default (Comp) => {
    return class extends Component {
        state = {
            openArticleId: null
        };

        openArticle = (openArticleId) => (ev) => {
            if (ev) ev.preventDefault();
            this.setState({ openArticleId })
        };

        render() {
            return <Comp {...this.props} {...this.state}
                openArticle = {this.openArticle}
            />
        }
    }
}