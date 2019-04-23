import React from 'react';
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider, connect } from "react-redux";
import App from './App';
import Login from './pages/Login';
import reducers from './store/reducers'

const RouteComponent = () => {
    return (
        <React.Fragment>
            <Route exact path="/" component={App} />
            <Route exact path="/Login" component={Login} />
        </React.Fragment>
    )
}
export const store = createStore(reducers);
export const StoreContext = React.createContext({ store });
export const ClientRouter = () => {
    return (
    //   <StoreContext.Provider value={{a:1}}>
        <Provider store={store}>
            <BrowserRouter>
                <RouteComponent />
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
                <RouteComponent />
            </StaticRouter>
        </Provider>
    )
}
