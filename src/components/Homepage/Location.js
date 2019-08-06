import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import map from '../img/map.jpg'





class Location extends Component {
    render() {
        return(
            <section id="share-section" className="bg-light text-muted py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="https://www.google.com/maps/place/PT+Erporate+Solusi+Global/@-7.7552473,110.3956025,15z/data=!4m5!3m4!1s0x0:0xbd02b1c307eba617!8m2!3d-7.7552473!4d110.3956025" target="_blank">
                            <img src={map} alt="Logo" className="img-fluid mb-3 rounded-circle" style={{width: 300, height: 300}}/>
                            </a>
                        </div>
                        <div className="col-md-6 order-1">
                        <h3>Where You Can Find Us</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                            tempore perspiciatis repudiandae hic?</p>
                            <Link to="/about" className="btn btn-outline-secondary">Go To Location</Link>
                        </div>  
                    </div>
                </div>
            </section>
        )
    }
}


export default Location;