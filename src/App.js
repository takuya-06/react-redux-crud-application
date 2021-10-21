import React from 'react';

//class App extends Component {
//    render() {
        //return <h1>Hello, world!</h1>;
//        return(
//            <React.Fragment>
//            <label htmlFor="bar">bar</label>
//            <input type="text" onChange={() => {console.log("I Clicked.")}} />
//            </React.Fragment>
//        )
        //return <input type="text" onChange={() => {console.log("I Clicked.")}} />;
//    }
//}

const App = () => {
    return(
        <div>
            <Cat />
            <Cat />
            <Cat />
            <Cat />
        </div>

    ) 
}

const Cat = () => {
    return <div>Meow!</div>
}

export default App;
