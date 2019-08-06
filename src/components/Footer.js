import React from 'react'

class Footer extends React.Component {
    render(){
        return(
            <div>
            <footer id="main-footer" className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col text-center text-light py-4">
                            <h3>Sample Web</h3>
                            <p>Copyright &copy; 2019
                             </p>
                            <button className="btn btn-primary" data-toggle="modal" data-target="#contactModal">Contact Us</button>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="modal fade text-dark" id="contactModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Contact Us</h5>
                            <button className="close" data-dismiss="modal">
                            </button>
                        </div>
                     <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
            </div>
        </div>
         </div>
        )
    }
}

export default Footer;