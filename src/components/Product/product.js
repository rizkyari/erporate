import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Header from '../Header'




class product extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        let url = 'http://localhost:1997/products'
        fetch(url)
        .then (resp => resp.json())
        .then(data =>{
            let posts = data.map ((post, index) =>{
                return (
                    // <div className="row">
                    // <div className="column">
                    <div className="card border-dark col-3 m-3 text-center" style={{ width: "18rem" }} key={index}>
                        <h3 className="card-title-top border-bottom">{post.name}</h3>
                        <div className="card-body">
                            <img src={post.src} className="card-img" alt={post.name} />
                            <p className="card-text">{post.desc}</p>
                            <p className="card-text">{post.price}</p>
                            <Link to={"/detailproduct/" + post.id}><button className="btn btn-secondary btn-block btn-sm my-2">Detail</button></Link>
                        </div>
                    </div>
                    // </div>
                    // </div>
                )
            })
            this.setState({posts : posts})
        })
    }

    render() {
        console.log(this.state.data);
        
        return (
            
               <div>
                   <Header />
                   <h1 className="text-center">PRODUCT LIST</h1>
                   <div className="container">
                   <div className="row ">
                   {this.state.posts}</div></div>
               </div>
            
        )
    }
}


export default product