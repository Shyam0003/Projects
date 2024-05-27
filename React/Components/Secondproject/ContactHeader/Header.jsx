nimport React from 'react'
import './Header.css'
import image from './image/images.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Header() {      
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <h1>CONTACT US</h1>
          <p>  LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}</p>
        </div>
        <div className="form">
          <div className="part1">
            <div className="btn">
              <button>
                <FontAwesomeIcon icon={faMessage} />VIA SUPPORT CHAT</button>
              <button> <FontAwesomeIcon icon={faPhone} />VIA CALL</button>
            </div>
            <div className="big-btn">
              <button><FontAwesomeIcon icon={faEnvelope} />VIA EMAIL FORM</button>
            </div>
            <div className="inputs">
              <div className="sub-inputs">
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <div className="sec-input">
                  <textarea name="" id="" cols="44" rows="10"></textarea>
                </div>
              </div>
              <div className="submit-btn">
                <button>Submit</button>
              </div>
            </div>

          </div>
          <div className="part2">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header