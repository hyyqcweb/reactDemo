import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {timeString: ''};
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    componentDidMount() {
        this._updateTimeString();
        this._timer = setInterval(this._updateTimeString.bind(this), 5000) // 隔5秒刷新
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    _updateTimeString() {
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createdTime) / 1000;
        this.setState({
            timeString: duration > 60 ?
                `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render() {
        const {username, content} = this.props.comment;
        const {timeString} = this.state;
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{username}</span>:
                </div>
                <p>{content}</p>
                <span className='comment-createdtime'>
                    {timeString}
                </span>
                <span
                    className='comment-delete'
                    onClick={this.handleDeleteComment}
                >
                    删除
                </span>
            </div>
        )
    }
}