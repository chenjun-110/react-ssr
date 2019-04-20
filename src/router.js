import React from 'react';
import { BrowserRouter, StaticRouter, Route } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
// const Routers = (Routes) => {
//     return (
//         <Routes>
//             <Route exact path="/" component={App} />
//             <Route exact path="/Login" component={Login} />
//         </Routes>
//     )
// }
export const ClientRouter = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/Login" component={Login} />
        </BrowserRouter>
    )
}

export const ServerRouter = (url,context) => {
    return (
        <StaticRouter 
            location={url}
            context={context}
        >
            <Route exact path="/" component={App} />
            <Route exact path="/Login" component={Login} />
        </StaticRouter>
    )
}
