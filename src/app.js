import routes from './routes'
import ReactDOM from 'react-dom'
import React from 'react'


var Grandparent = React.createClass({
    childContextTypes: {
        name: React.PropTypes.string.isRequired
    },
    getChildContext: function() {
        return {name: 'Jim'};
    },

    render: function() {
        return <Parent/>;
    }

});
var Parent = React.createClass({
    contextTypes: {
        name: React.PropTypes.string.isRequired
    },
    render: function() {
        console.log(this);
        return <Child/>;
    }
});
var Child = React.createClass({
    contextTypes: {
        name: React.PropTypes.string.isRequired
    },
    render: function() {
        console.log(this);
        return <div>My name is {this.context.name}</div>;
    }
});
//ReactDOM.render(<Grandparent/>, document.body);

ReactDOM.render(routes, document.getElementById('container'))

