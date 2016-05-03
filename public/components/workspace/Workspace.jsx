import React from 'react';
// import ReactDOM from 'react-dom';
import WorkspaceImage from './WorkspaceImage.jsx';

import styles from '../../css/workspace.css';

export default class Workspace extends React.Component {
  render() {
    console.log(this.props.fixture.workspace.images);
    var Images = this.props.fixture.workspace.images.map(function(image) {
      return (
        <WorkspaceImage src={image.src} />
      );
    });
    return (
      <div className={styles.workspace}>
        {Images}
      </div>
    );
  }
}