import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <span>{this.props.fixture.prompt.principal} {this.props.task.concept.toUpperCase()}{this.props.fixture.prompt.punctuation}</span>
        <img />
      </div>
      );
  }
}
