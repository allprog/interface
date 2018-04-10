import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Pause from 'material-ui-icons/Pause';
import FastF from 'material-ui-icons/FastForward';
import FastR from 'material-ui-icons/FastRewind';
import Next from 'material-ui-icons/SkipNext';
import Preview from 'material-ui-icons/SkipPrevious';
import {Route} from './index.js'
import './App.css';



function Manual(props) {
    const style = {
    marginRight: 20
  };
  

  return (
    <div>
    <Button variant="fab" aria-label="pause"  color="primary" style={style}>
        <FastR />
    </Button>
    <Button variant="fab" aria-label="add"  color="primary" style={style}>
        <Preview />
    </Button>
    <Button variant="fab" aria-label="add"  color="primary" style={style}>
        <Pause />
    </Button>
    <Button variant="fab" aria-label="add"  color="primary" style={style}>
        <Next />
    </Button>
    <Button variant="fab" aria-label="add"  color="primary" style={style}>
        <FastF />
    </Button>
    </div>
  );

  
  
}


class App extends Component {
 
  render() {
    return (
      <div className="App">
         
          <Route path="/manual" component={Manual}  />
         
      </div>
    );
  }
}

export default App;
