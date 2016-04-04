import React, {Component, PropTypes} from 'react'
import undersScore from "underscore"
import history  from '../history'

class NewArticle extends Component {

    constructor() {
        super();
        this.state = {
            localization: {},
            user:''
        }
    }

    static propTypes = {};
    static contextTypes = {
        user: PropTypes.string,
        localization: PropTypes.object,
        thisLang: PropTypes.string,
        router:PropTypes.object
    }

    componentWillMount() {
        if(undersScore.isUndefined(this.context.user)){
            history.replace('/articles/');
            console.log(this);
        }
        this.setState({
            localization: this.context.localization[this.context.thisLang]
        })
    }

    componentWillUpdate(nextProps, nextState,context) {
        if(undersScore.isUndefined(this.context.user)){
            history.replace('/articles/');
        }
        /* мне не нравится подобная реалиция подскажите как сделать граматно,
         и как функции работающие с state  компонентов выносить, их лучше выносить например в HOC
         */
        if (!undersScore.isEqual(nextState.localization, context.localization[context.thisLang])) {
            this.setState({
                localization: this.context.localization[this.context.thisLang]
            })
        };
    }

    render() {
        const newArticleTitle = this.state.localization;
        return (
            <div>
                <h2>{newArticleTitle.newArtile}</h2>
            </div>
        )
    }
}

export default NewArticle