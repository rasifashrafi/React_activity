import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Title () {
    return (
        <div className= "title">
            <h1 className= "header">
                This is simple practice of react components.
            </h1>
        </div>
    )
}

function Message () {
    return (
        <div className = "message">
            <h2>
                This is simple message components..
            </h2>
        </div>
    )
}

function List () {
    return (
        <div className = "list">
            <li><h3>Nijhum</h3></li>
            <li><h3>Jeme</h3></li>
            <li><h3>Anu</h3></li>
        </div>
    )
}



class App extends Component{

    render () {
        
        return (
            <div className = "container">
               <Title/>
               <Message/>
               <List />
            </div>
            
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

