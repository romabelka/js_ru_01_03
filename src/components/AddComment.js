import React, { Component, PropTypes } from 'react'
import linkState from 'react-link-state';

export default
class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentName: '',
            commentText: ''
        }
    }

    close = () => {
        this.setState({commentName: '', commentText: ''});
        this.props.cancel();
    };

    save = () => {
        this.props.onNewComment({
            name: this.state.commentName,
            text: this.state.commentText
        });

        this.close();
    };

    render() {
        const ifAnyCommentText = this.state.commentText.trim() !== '';

        return (
            <div className="AddComment">
                <div className="AddComment__screen" style={{display: (ifAnyCommentText? 'block': 'none')}}>
                    <ul>
                        <li>{this.state.commentText}</li>
                    </ul>
                </div>
                <br/>
                <div className="AddComment__controls">
                    <label htmlFor="commentName">Name:</label><br/>
                    <input id="commentName" type="text"
                           valueLink={linkState(this, 'commentName')}
                    />
                    <br/>
                    <label htmlFor="commentText">Text:</label>
                    <textarea id="commentText"
                              style={{width: '100%'}}
                              valueLink={linkState(this, 'commentText')}
                    />
                    <button onClick={this.close}>Cancel</button>
                    <button style={{display: (ifAnyCommentText? 'inline-block': 'none')}}
                            onClick={this.save}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}