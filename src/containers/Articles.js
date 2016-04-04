import React, {Component, PropTypes} from 'react'
import ArticleList from '../components/ArticleList'
import {articleStore, userStore} from '../stores'
import {signIn} from '../actions/user'
import undersScore from "underscore"

class Articles extends Component {
    constructor() {
        super()
        this.state = {
            articles: articleStore.getOrLoadAll(),
            loading: articleStore.loading,
            name: '',
            localization: ''
        }
    }

    static contextTypes = {
        router: PropTypes.object,
        localization: PropTypes.object,
        thisLang: PropTypes.string
    }

    static childContextTypes = {
        user: PropTypes.string
    }

    getChildContext() {
        return {
            user: this.state.user//this.state.user
        }
    }
    componentWillUpdate(nextProps, nextState,context){
        /* мне не нравится подобная реалиция подскажите как сделать граматно,
         и как функции работающие с state  компонентов выносить, их лучше выносить например в HOC
         */
        if (!undersScore.isEqual(nextState.localization, context.localization[context.thisLang])) {
            this.setState({
                localization: this.context.localization[this.context.thisLang]
            })
        };
    }
    componentDidMount() {
        articleStore.addChangeListener(this.articlesChanged)
        userStore.addChangeListener(this.userChanged)
    }

    componentWillMount() {
        this.setState({
            localization: this.context.localization[this.context.thisLang]
        })
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.articlesChanged)
        userStore.removeChangeListener(this.userChanged)
    }

    articlesChanged = () => {
        this.setState({
            articles: articleStore.getOrLoadAll(),
            loading: articleStore.loading
        })
    }

    render() {
        const {articles, loading, localization} = this.state
        if (loading) return <h1>{localization.load}...</h1>
        return (
            <div>
                <h3 onClick={this.goToNewArticle}>{localization.newArtile}</h3>
                <input value={this.state.name} onChange={this.changeName}/>
                <a href="#" onClick={this.signIn}>{localization.signIn}</a>
                <ArticleList articles={articles}/>
                {this.props.children}
            </div>
        )
    }

    changeName = (ev) => {
        this.setState({
            name: ev.target.value
        })
    }

    userChanged = () => {
        this.setState({
            user: userStore.currentUser
        })
    }

    signIn = (ev) => {
        ev.preventDefault()
        signIn(this.state.name)
    }

    goToNewArticle = () => {
//        this.context.router.push('/articles/new')
        this.context.router.replace('/articles/new')
    }
}

export default Articles