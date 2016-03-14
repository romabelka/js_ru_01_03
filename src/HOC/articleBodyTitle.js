import React, {Component as ReactComponent} from 'react'

export default (Component) => {
    return class extends ReactComponent {
        state = {
            isOpen: false
        }

        render() {
            return <Component {...this.props} {...this.state}
                getTitle = {this.getTitle}
                getBody = {this.getBody}
                />
        }

       getBody= (CommentList) => {
            const {isOpen, article } = this.props
            if (!isOpen) return <noscript />
            return (
                <div>
                    <p>{article.text}</p>
                    <CommentList ref="comments" comments={article.comments || []}/>
                </div>
            )
        }

        getTitle= (ev) => {

            const { article: { title }, openArticle  } = this.props

            return (
                <h3 onClick={openArticle}>
                    {title}
                </h3>
            )
        }


    }
}