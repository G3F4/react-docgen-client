import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Description of component "DrawerMenu".
 */
export default class DrawerMenu extends React.Component {
  static propTypes = {
    /**
     * Description of prop "list:".
     */
    list: React.PropTypes.array,
    /**
     * Description of prop "onSelect".
     */
    selected: React.PropTypes.string,
    /**
     * Description of prop "onSelect".
     */
    onSelect: React.PropTypes.func,
  };

  state = { open: false };

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = (selected) => {
    this.props.onSelect(selected);
    this.setState({ open: false , selected });
  };

  render() {
    const { list } = this.props;

    console.log(['list'], list);

    return list.length === 0 ? null : (
      <div>
        <RaisedButton
          label="Select module"
          onTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
        {list.map(key => (
          <MenuItem key={key} onTouchTap={e => this.handleClose(key, e)}>{key}</MenuItem>
        ))}
        </Drawer>
      </div>
    );
  }
}
