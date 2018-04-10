import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Nav from "./Nav";

class Main extends React.Component {


    render(){
    return(
        <div>
           <Nav />
           <App/>
           
        </div>
    );
   
    }
}




ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();