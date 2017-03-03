import React from 'react';
import Dropzone from 'react-dropzone';
import Paper from 'material-ui/Paper';

const style = {
  position: 'relative',
  opacity: 1,
  fontSize: 14,
  letterSpacing: 0,
  textTransform: 'uppercase',
  fontWeight: 500,
  marginLeft: 20,
  userSelect: 'none',
  padding: 9,
  color: 'rgba(0, 0, 0, 0.870588)',
};

/**
 * Description of component "Upload".
 */
export default class Upload extends React.Component {
  static propTypes = {
    /**
     * Description of prop "onUploadDone".
     */
    onUploadDone: React.PropTypes.func,
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    const reader = new FileReader();
    const [file] = acceptedFiles;
    reader.readAsText(file, 'UTF-8');
    reader.onload = (evt) => {
      this.props.onUploadDone(JSON.parse(evt.target.result));
    };
    reader.onerror = function () {
      console.log(['error reading file'], rejectedFiles);
    };
  }

  render() {
    return (
        <Paper style={style}>
          <Dropzone style={{}} onDrop={this.onDrop}>
            <div>Click to select or drag&drop react-docgen file</div>
          </Dropzone>
        </Paper>
    );
  }
}
