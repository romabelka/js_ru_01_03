import React, {Component, PropTypes} from 'react'
import localization from '../localization'
import {changeLang} from '../actions/localization'
import {localizationStore}  from '../stores'

class App extends Component {

    constructor() {
        super()
        this.state = {
            thisLang: '',
            lang: '',
            langList: []
        }
    }

    static childContextTypes = {
        localization: PropTypes.object,
        thisLang: PropTypes.string
    }

    getChildContext() {
        return {
            localization: localization,
            thisLang: localizationStore.getCurrentLang()
        }
    }

    static contextTypes = {
        localization: PropTypes.object,
        thisLang: PropTypes.string
    }

    componentWillMount() {
        this.setState({
            thisLang: localizationStore.getCurrentLang(),
            lang: localization[localizationStore.getCurrentLang()],
        })
        this.state.langList = Object.keys(localization);
        changeLang(this.state.thisLang);
    }

    changeLangThis(lang) {
        changeLang(lang);
        this.setState({
            thisLang: localizationStore.getCurrentLang(),
            lang: localization[localizationStore.getCurrentLang()],
        })
    }

    static propTypes = {};
    render() {
        const langs = this.state.langList.map((lang, i) => <span onClick={this.changeLangThis.bind(this, lang)}
                                                                 key={i}>{lang} </span>);
        return (
            <div>
                <h1>{this.state.lang.nameApp}!</h1>
                <div>{langs}</div>
                {this.props.children}
            </div>
        )
    }
}

export default App