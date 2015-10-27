import Marked from 'marked'
import React from 'react'
import Reply from './Reply'
import ReplyForm from './ReplyForm'

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      replies: []
    };
  }

  handleReplySubmit(text) {
    var replies = this.state.replies;
    var newReplies = replies.concat([{text: text}]);
    this.setState({replies: newReplies});
  }

  render() {
    var rawMarkup = Marked(this.props.children.toString(), {sanitize: true});

    var replyNodes = this.state.replies.map((reply)=> {
      return(
        <Reply>
          {reply.text}
        </Reply>
      );
    });

    return(
      <div className='comment'>
        <h3 className='commentAuthor'>
          {this.props.author}
        </h3>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
        <h3>
          Replies
        </h3>
        <ul>
          {replyNodes}
        </ul>
        <ReplyForm onReplySubmit={this.handleReplySubmit.bind(this)} />
      </div>
    );
  }
}
