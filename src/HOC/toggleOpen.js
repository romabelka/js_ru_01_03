import React, {Component as ReactComponent} from 'react'

export default (Component) => {
    return class extends ReactComponent {
        state = {
            isOpen: false
        };

        toggleOpen = (ev) => {
            if (ev) ev.preventDefault();
            this.setState({
                isOpen: !this.state.isOpen
            })
        };

        close = (ev) => {
            if (ev) ev.preventDefault();
            this.setState({
                isOpen: false
            })
        };

        render() {
            return <Component {...this.props} {...this.state}
                toggleOpen = {this.toggleOpen}
                close = {this.close}
            />
        }
    }
}