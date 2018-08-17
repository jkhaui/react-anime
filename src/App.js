import React, { Component } from 'react';
import Fade from "./Fade";

class App extends Component {
    state = {
        show: false
    };
    handleToggle = () => {
      this.setState(prevState => ({
          show: !prevState.show
      }))
    };
  render() {
      const {show} = this.state;
    return (
      <div>
          <button onClick={this.handleToggle}>
              Click to toggle
          </button>
          <div>
              <Fade in={!!show}/>
          </div>
      </div>
    );
  }
}

export default App;
