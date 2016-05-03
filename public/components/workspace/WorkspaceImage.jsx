import React from 'react';
// import ReactDOM from 'react-dom';
import styles from '../../css/workspace.css';

export default class WorkspaceImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "styles.blankChoice"
    }
  }

  // imageOverlay() {
  //   this.setState({
  //     choice: "yesChoice"
  //   })
  // },

  render() {
    console.log(this.state.choice);
    return (
      <div className={styles.operand}>
        <img className={styles.blankChoice} src={this.props.src} />
        <div>
          <button className={styles.yesbutton} onClick={() => this.imageOverlay()}>Yes</button>
          <button className={styles.nobutton} onClick={() => this.imageOverlay()}>No</button>
        </div>
      </div>
    );
  }
}
