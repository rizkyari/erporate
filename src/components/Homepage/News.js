import React, { Component } from 'react'
import {Link} from 'react-router-dom'




class News extends Component {
    render() {
        return(
            <section id="news-section" class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 order-2">
                            <img src="https://www.jakartanotebook.com/images/products/99/63/19075/2/kaos-polos-katun-pria-o-neck-size-m-81402b-or-t-shirt-black-24.jpg" alt="" className="img-fluid mb-3 rounded-circle" alt="" class="img-fluid mb-3 rounded-circle"
                            style={{width: 400, height: 400}}/>
                        </div>
                        <div class="col-md-6 order-1">
                            <h3>Recent Article</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                            tempore perspiciatis repudiandae hic?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                            tempore perspiciatis repudiandae hic?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                            tempore perspiciatis repudiandae hic?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore reiciendis, voluptate at alias laborum odit aliquid
                            tempore perspiciatis repudiandae hic?</p>
                            <Link to="/article" class="btn btn-outline-secondary">Find Out More</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default News;