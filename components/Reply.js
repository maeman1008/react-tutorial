import React from 'react'

export default class Reply extends React.Component {

  render() {
    return(
      <li>
        {this.props.children}
      </li>
    );
  }
}
