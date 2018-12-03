import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {timeString: ''}
    }

    componentDidMount() {
        this._updateTimeString();
    }

    _updateTimeString() {
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createdTime) / 1000;
        console.log(comment);
        this.setState({
            timeString: duration > 60 ?
                `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    render() {
        const {username, content} = this.props.comment;
        const {timeString} = this.state;
        return (
            <div className='comment'>
                <div className="comment-user">
                    <span>{username}</span>:
                </div>
                <p>{content}</p>
                <span className='comment-createdtime'>
                    {timeString}
                </span>
            </div>
        )
    }
}