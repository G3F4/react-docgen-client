import React from 'react';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TABLE_CONFIG = {
  selectable: true,
  style: { backgroundColor:'transparent' },
  header: {
    style: { backgroundColor:'transparent' },
    displaySelectAll: false,
    adjustForCheckbox: false,
  },
  body: {
    displayRowCheckbox: false,
    deselectOnClickaway: true,
    showRowHover: true,
    stripedRows: true,
  },
};

const style = {
  width: '100%',
  marginTop: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

/**
 * Description of component "MethodsTable".
 */
export default class MethodsTable extends React.Component {
  static propTypes = {
    /**
     * Description of prop "list".
     */
    list: React.PropTypes.array,
  };

  render() {
    const { header, body, ...table } = TABLE_CONFIG;
    const { list } = this.props;

    return list.length === 0 ? null : (
      <Paper style={style} zDepth={2} rounded={false}>
        <Table {...table}>
          <TableHeader {...header}>
            <TableRow>
              <TableHeaderColumn colSpan="3">
                Methods list
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Prop name">Method</TableHeaderColumn>
              <TableHeaderColumn tooltip="Prop type">Params</TableHeaderColumn>
              <TableHeaderColumn tooltip="Props description">Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody {...body}>
          {list.map(({ name, key, description = '', params = [] }) => (
            <TableRow key={key}>
              <TableRowColumn>{name}</TableRowColumn>
              <TableRowColumn>{params.map(param => param.name).join(', ')}</TableRowColumn>
              <TableRowColumn>{description}</TableRowColumn>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
