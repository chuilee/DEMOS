import React from 'react';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'

const styles = {
  floatingActionButton: {
    position: 'absolute',
    left: 20,
    top: 20
  }
}

export default class MenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          style={styles.floatingActionButton}
          onTouchTap={this.handleToggle.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>
        <Drawer open={this.state.open}>
          <MenuItem href="/index.html" onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
          <MenuItem href="/async.html" onTouchTap={this.handleClose.bind(this)}>Async</MenuItem>
        </Drawer>
      </div>
    );
  }
}
