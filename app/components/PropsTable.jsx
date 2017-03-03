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
 * Description of component "PropsTable".
 */
export default class PropsTable extends React.Component {
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
                Props list
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Prop name">Prop</TableHeaderColumn>
              <TableHeaderColumn tooltip="Prop type">Type</TableHeaderColumn>
              <TableHeaderColumn tooltip="Is prop requred">Required</TableHeaderColumn>
              <TableHeaderColumn tooltip="Props description">Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody {...body}>
          {list.map(prop => console.log(['prop'], prop) || (
            <TableRow key={prop.key}>
              <TableRowColumn>{prop.key}</TableRowColumn>
              <TableRowColumn>{prop.type.name}</TableRowColumn>
              <TableRowColumn>{prop.required.toString()}</TableRowColumn>
              <TableRowColumn>{prop.description}</TableRowColumn>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
