import React from 'react';
import Paper from 'material-ui/Paper'

const style = {
  padding: '80px 16px',
  width: 500,
  overflowY: 'auto'
}

export default class PageContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper style={style}>
        {this.props.children}
      </Paper>
    );
  }
}
