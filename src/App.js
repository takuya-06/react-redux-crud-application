import React, { Component } from 'react';

class App extends Component {
    render() {
        //return <h1>Hello, world!</h1>;
        return(
            <React.Fragment>
            <label htmlFor="bar">bar</label>
            <input type="text" onChange={() => {console.log("I Clicked.")}} />
            </React.Fragment>
        )
        //return <input type="text" onChange={() => {console.log("I Clicked.")}} />;
    }
}

export default App;
