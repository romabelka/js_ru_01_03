import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from './CommentList'
import BodyTitle from '../HOC/articleBodyTitle'

class Article extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        article: PropTypes.object.isRequired
    }


  /*  componentWillMount() {
        console.log('---', 'going to mount');
    }

    componentDidMount() {
        console.log('---', 'mounted to: ', this.refs.container);
    }

    componentDidUpdate() {
        console.log('---', 'comments', findDOMNode(this.refs.comments));
    }*/

    render() {
        console.log(isOpen);
        const { isOpen, article,openArticle,getTitle,getBody } = this.props
        return (
            <div ref="container" >
                <a href = "#" onClick = {openArticle}>select</a>
                {getTitle()}
                {getBody(CommentList)}
            </div>
        )
    }

}

export default BodyTitle(Article)