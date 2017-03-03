import React from 'react';
import ComponentInfo from './ComponentInfo';

/**
 * Description of component "ComponentInfo".
 */
export default class ComponentInfoList extends React.Component {
  static propTypes = {
    /**
     * Description of prop "data".
     */
    list: React.PropTypes.array,
  };

  render() {
    return !this.props.list ? null : (
      <div>
      {this.props.list.map((data, key) => (
        <ComponentInfo data={data} key={key} />
      ))}
      </div>
    );
  }
}
