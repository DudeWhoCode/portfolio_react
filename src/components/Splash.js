import React from 'react'
import './Splash.css'


class Splash extends React.Component {
    render() {
      return (
        <div className="splash">
            <div className="splash_logo">
                DudeWhoCode
            </div>
            <div className="splash_svg">
                <svg className="FullWidth">
                    <rect className="FullWidth" />
                </svg>
            </div>
            <div className="splash_minimize">
                <svg className="FullWidth">
                    <rect className="FullWidth" />
                </svg>
            </div>
            <div className="text">
                <p>NARENDRAN</p>
                <p>Software Consultant</p>
                <button>More</button>
            </div>
        </div>
      )
    }
  }
  
  export default Splash