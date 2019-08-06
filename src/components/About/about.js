import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import map from '../img/map.jpg'
import Header from '../Header'
import Footer from '../Footer'
 
class about extends Component {
  render () {
    return (
        <div>
          <Header/>
        <div >
            <h1 className="text-center">About Us</h1>
            <div className="video">
              <ReactPlayer url='https://www.youtube.com/watch?v=0JrlKcoD1Qw' controls />
            </div>
            <p className="text-center m-2">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Fusce in urna vitae sapien semper condimentum. 
              Etiam auctor elementum tortor, nec eleifend metus sollicitudin sollicitudin. 
              Mauris efficitur felis a dolor feugiat.
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Fusce in urna vitae sapien semper condimentum. 
              Etiam auctor elementum tortor, nec eleifend metus sollicitudin sollicitudin. 
              Mauris efficitur felis a dolor feugiat.
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Fusce in urna vitae sapien semper condimentum. 
              Etiam auctor elementum tortor, nec eleifend metus sollicitudin sollicitudin. 
              Mauris efficitur felis a dolor feugiat.
              </p>
            <div className="map m-3">
                <h5>Find Us At:</h5>
                <a href="https://www.google.com/maps/place/PT+Erporate+Solusi+Global/@-7.7552473,110.3956025,15z/data=!4m5!3m4!1s0x0:0xbd02b1c307eba617!8m2!3d-7.7552473!4d110.3956025" target="_blank">
                <img src={map} alt="Logo" />
                </a>
                <p className="text-center m-2">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Fusce in urna vitae sapien semper condimentum. 
              Etiam auctor elementum tortor, nec eleifend metus sollicitudin sollicitudin. 
              Mauris efficitur felis a dolor feugiat.
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Fusce in urna vitae sapien semper condimentum. 
              Etiam auctor elementum tortor, nec eleifend metus sollicitudin sollicitudin. 
              Mauris efficitur felis a dolor feugiat.</p>
            </div>
        </div>
        <Footer />
        </div>
    )
  }
}

export default about;