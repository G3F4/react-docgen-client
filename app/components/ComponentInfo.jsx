import React from 'react';
import Paper from 'material-ui/Paper';
import PropsTable from './PropsTable';
import MethodsTable from './MethodsTable';

const style = {
  width: '100%',
  marginTop: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

/**
 * Description of component "ComponentInfo".
 */
export default class ComponentInfo extends React.Component {
  static propTypes = {
    /**
     * Description of prop "data".
     */
    data: React.PropTypes.object,
  };

  render() {
    const { data } = this.props;
    const { props, methods } = data;
    const componentPropsData = Object.keys(props).map(key => ({ key, ...props[key] }));
    const componentMethodsData = Object.keys(methods).map(key => ({ key, ...methods[key] }));

    return (
      <Paper style={style} zDepth={4} rounded={false}>
        <h1>{data.description}</h1>
        <PropsTable list={componentPropsData} />
        <MethodsTable list={componentMethodsData} />
      </Paper>
    );
  }
}
