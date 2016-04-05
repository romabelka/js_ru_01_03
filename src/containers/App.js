import React, { Component, PropTypes } from 'react'
import dictionary from '../dictionary'

class App extends Component {
    static propTypes = {};

    state = {
        language: 'en'
    }

    static childContextTypes = {
        i18n: PropTypes.object
    }

    getChildContext() {
        return {
            i18n: dictionary[this.state.language]
        }
    }


    render() {
        return (
            <div>
                <ul>
                    <li><a href="#" onClick={this.changeLang('en')}>EN</a></li>
                    <li><a href="#" onClick={this.changeLang('ru')}>RU</a></li>
                </ul>
                {this.props.children}
            </div>
        )
    }

    changeLang = language => ev => this.setState({ language })
}


export default App