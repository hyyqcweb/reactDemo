import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends Component{
    // 类型检测
    static propTypes = {
        onSubmit: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            content: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.text.focus(); // ref 自动聚焦
        this._loadUsername();
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    // 调用localStorage
    _loadUsername() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({username})
        }
    }

    // 用户名持久化 localStorage
    _saveUsername(username) {
        localStorage.setItem('username', username);
    }

    handleUsernameBlur(e) {
        this._saveUsername(e.target.value);
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit() {
        if(this.props.onSubmit) {
            const {username, content} = this.state;
            this.props.onSubmit({
                username,
                content,
                createdTime: +new Date() // 时间戳
            })
        }
        this.setState({
            username: '',
            content: ''
        })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名: </span>
                    <div className='comment-field-input'>
                        <input
                            type='text'
                            value={this.state.username}
                            onBlur={this.handleUsernameBlur}
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容: </span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(text) => this.text = text}
                            value={this.state.content}
                            onChange={this.handleContentChange}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        )
    }
}