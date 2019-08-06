import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../components/Homepage/Home'
import Product from './Product/product'
import detail from './Product/detail'
import article from './Article/article'
import about from './About/about'

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/product' component={Product}/>
                    <Route path="/detail/:asdfg" component={detail}/>
                    <Route path='/article' component={article}/>
                    <Route path='/about' component={about}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;