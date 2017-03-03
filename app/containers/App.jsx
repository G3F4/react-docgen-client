import React from 'react';
import DrawerMenu from '../components/DrawerMenu';
import ComponentInfoList from '../components/ComponentInfoList';
import Upload from '../components/Upload';

/**
 * Description of component "App".
 */
export default class App extends React.Component {
  static propTypes = {
    /**
     * Description of prop "data".
     */
    data: React.PropTypes.object,
  };

  state = {
    selected: null,
    data: {},
  }

  onUploadDone = (data) => {
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const list = Object.keys(data).map(key => key);
    const selectedComponentData = data[this.state.selected] || null;

    return (
      <div>
        <div style={{ display: 'inline-flex' }}>
          <DrawerMenu list={list} selected={this.state.selected} onSelect={selected => {
            console.log(['App.selected'], selected);
            this.setState({ selected });
          }} />
          <Upload onUploadDone={this.onUploadDone} />
        </div>
        <ComponentInfoList list={selectedComponentData}/>
      </div>
    );
  }
}
