import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'


class product extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        }
    }

    componentDidMount(){
        let url = 'http://localhost:1997/article'
        fetch(url)
        .then (resp => resp.json())
        .then(data =>{
            let items = data.map ((item, index) =>{
                return (
                    // <div className="row">
                    // <div className="column">
                    <div className="card border-dark col-3 m-3 text-center" style={{ width: "18rem" }} key={index}>
                        <h3 className="card-title-top border-bottom">{item.judul}</h3>
                        <div className="card-body">
                            <img src={item.src} className="card-img" alt={item.judul} />
                            <p className="card-text">{item.desc}</p>
                            <Link to={"/detailproduct/" + item.id}><button className="btn btn-secondary btn-block btn-sm my-2">Detail</button></Link>
                        </div>
                    </div>
                    // </div>
                    // </div>
                )
            })
            this.setState({items : items})
        })
    }

    render() {
        console.log(this.state.data);
        
        return (
            
               <div>
                   <Header />
                   <h1 className="text-center">Article</h1>
                   <div className="container">
                   <div className="row ">
                   {this.state.items}</div></div>
               </div>
            
        )
    }
}


export default product