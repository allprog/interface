import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Nav from "./Nav";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';




class Main extends React.Component {
  
render(){
    return(
        <Router>
          <div>
               <Nav />
               <App />
           </div>
       </Router>
    );
   
    }
}



ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();


export {Link,Route} ;