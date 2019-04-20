import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import * as serviceWorker from './serviceWorker';
import { ClientRouter } from './router'
// const IndexRouter = (props) => {
//     return (
//         <BrowserRouter>
//             <Route exact path="/" component={App} />
//             <Route exact path="/Login" component={Login} />
//         </BrowserRouter>
//     )
// }
ReactDOM.render(<ClientRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();