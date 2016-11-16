import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MenuItems from '../../components/LeftMenus/index'
import injectTapEventPlugin from 'react-tap-event-plugin'

import '../../common/sass/common.scss'

injectTapEventPlugin()

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  componentDidMount() {
    console.log(this.state.open)
  }

  handleToggle() {
    this.setState({open:!this.state.open});
    console.log(this.state.open)
  }



  render() {
    return (
      <MuiThemeProvider>
        <MenuItems />
      </MuiThemeProvider>
    );
  }
}
