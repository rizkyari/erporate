import React, { Component } from 'react'
import {Link} from 'react-router-dom'




class Highlight extends Component {
    render() {
        return(
            <section id="explore-section" className="bg-light text-muted py-5">
                <div className="container">
                    <h3 className="text-center mb-3">Product Highlight</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://www.jakartanotebook.com/images/products/99/63/19075/2/kaos-polos-katun-pria-o-neck-size-m-81402b-or-t-shirt-black-24.jpg" alt="" className="img-fluid mb-3 rounded-circle"
                            style={{width: 400, height: 400}}/>
                        </div>
                        <div className="col-md-6">
                            <h3>Explore & Connect</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                            tempore perspiciatis repudiandae hic?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                            tempore perspiciatis repudiandae hic?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                            tempore perspiciatis repudiandae hic?</p>
                            <Link to="/product" class="btn btn-outline-secondary">Find Out More</Link>
                        </div>
                        
                    </div>
                </div>
            </section>
        )
    }
}


export default Highlight;