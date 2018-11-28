import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css';

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments : []
        }
    }
    handleSubmitApp(comment) {
        if (!comment) return;
        if (!comment.username) return alert('请输入用户名');
        if (!comment.content) return alert('请输入评论内容');
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        });
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitApp.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}

export default CommentApp;
