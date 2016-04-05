import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render() {
        const { count } = this.props
        return (
            <div>
                <h1>{count}</h1>
            </div>
        )
    }
}

export default Counter