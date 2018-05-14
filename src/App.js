import React, { Component } from 'react';


const MyError = (props) => {
  if(props.err) {
    return (
      <b style={{color:'red'}}>{props.err}</b>
    )
  }
  throw new Error('ooh! ubaduba ... eepic fail .... ooh ')
}


class App extends Component {
  state={}

  componentDidCatch(err) {
    this.setState({err:err.message});
  }
  render() {
    return (
      <p>
        <MyError err={this.state.err} />
      </p>
      
    );
  }
}

export default App;
