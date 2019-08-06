import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from '../Header';
import Carousel from './Carousel';
import Highlight from './Highlight';
import News from './News'
import Location from './Location'

class Home extends React.Component {
    render () {
        return (
            <div className='Home'>
                <Header />
                <Carousel />
                <Highlight />
                <News />
                <Location />
            </div>
        )
    }
}

export default Home;