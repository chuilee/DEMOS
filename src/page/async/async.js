import React, { Component } from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {GridList, GridTile} from 'material-ui/GridList'
import MenuItems from '../../components/LeftMenus/index'
import PageContainer from '../../components/PageContainer/index'
import injectTapEventPlugin from 'react-tap-event-plugin'

import '../../common/sass/common.scss'

injectTapEventPlugin()

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
}

export default class Async extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      add1: '',
      add2: ''
    }
  }

  componentDidMount() {
    function resolveAfter2Seconds(x){
      return new Promise(resolve  => {
        setTimeout( ()=>{
          resolve(x)
        }, 2000 )
      })
    }

    // 一步一步，等待执行结束
    async function add1() {
      var a = await resolveAfter2Seconds(10)
      var b = await resolveAfter2Seconds(20)
      return a + b
    }

    // 同时执行
    async function add2() {
      var a = resolveAfter2Seconds(10)
      var b = resolveAfter2Seconds(20)
      return await a + await b
    }

    add1().then( result => {
      this.setState({
        add1: result
      })
    } )

    add2().then( result => {
      this.setState({
        add2: result
      })
    } )
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.root}>
          <MenuItems />
          <PageContainer>
            <h3>结果:</h3>
            <div><span>add1:</span>{this.state.add1}</div>
            <div><span>add2:</span>{this.state.add2}</div>
          </PageContainer>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<Async />, document.body.appendChild(document.createElement('div')))
