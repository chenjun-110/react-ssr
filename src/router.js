import React from 'react';
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import App from './App';
import Login from './pages/Login';
import reducers from './store/reducers'


export const store = createStore(reducers);
export const StoreContext = React.createContext({ store });
export const ClientRouter = () => {
    return (
    //   <StoreContext.Provider value={{a:1}}>
        <Provider store={store}>
            <BrowserRouter>
                <Route exact path="/" component={App} />
                <Route exact path="/Login" component={Login} />
            </BrowserRouter>
        </Provider>
    )
}

export const ServerRouter = (url, context) => {
    return (
        <Provider store={store}>
            <StaticRouter 
                location={url}
                context={context}
            >
                <Route exact path="/" component={App} />
                <Route exact path="/Login" component={Login} />
            </StaticRouter>
        </Provider>
    )
}
