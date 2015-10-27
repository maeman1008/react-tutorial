import React from 'react'

export default class ReplyForm extends React.Component {

  handleSubmit(e) {
    e.preventDefault();
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text) return;
    this.props.onReplySubmit(text);
    React.findDOMNode(this.refs.text).value = '';
  }

  render() {
    return(
      <form className="replyForm" onSubmit={this.handleSubmit.bind(this)}>
        <b>ReplyForm : </b>
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
    )
  }
}
