import React from 'react';
import ReactDOM from 'react-dom';

console.log(typeof("hi"));

class MyApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 >Hello</h1>
                <p>Hi</p>
            </div>
        )
    }   
}

ReactDOM.render(<MyApp />, document.getElementById("root"));