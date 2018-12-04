import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import {Clock} from './components';
import './index.css';

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : []
        };
        this.handleSubmitApp = this.handleSubmitApp.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    componentDidMount() {
        this._loadComments();
    }

    // 持久化评论
    _loadComments() {
        let comments = localStorage.getItem('comments');
        if (comments) {
            comments = JSON.parse(comments);
            this.setState({comments})
        }
    }

    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitApp(comment) {
        if (!comment) return;
        if (!comment.username) return alert('请输入用户名');
        if (!comment.content) return alert('请输入评论内容');
        const {comments} = this.state;
        comments.push(comment);
        this.setState({comments});
        this._saveComments(comments);
    }

    handleDeleteComment(index) {
        const {comments} = this.state;
        comments.splice(index, 1);
        this.setState({comments});
        this._saveComments(comments)
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitApp}/>
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment}
                />
                <Clock />
            </div>
        );
    }
}

export default CommentApp;
