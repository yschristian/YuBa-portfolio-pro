import React from "react"
import Typed from "react-typed"

function Header() {
  return (
<div className='profile-container'>
        <div className='profile-parent'> 
            <div className='profile-details'>
                <div className='profile-colz'>
                   <div className='profile-colz-icon'>
                      <a href='#'>
                        <i className='fa fa-facebook-square'></i>
                      </a>
                      <a href='#'>
                        <i className='fa fa-instagram'></i>
                      </a>
                      <a href='#'>
                        <i className='fa fa-linkedIn'></i>
                      </a>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                   </div>
                </div>
               <div className='profile-details-name'>
                 <span className='primary-text'>
                   {" "}
                   Hello I'M <span className='highlighted-text'>YuBa Dev</span>
                 </span>
              </div>
              <div className='profile-details-role'>
                <span className='primary-text'>
                 {" "}
                 <h1>
                  {" "}
                  <Typed 
                  strings={['Software Developer','Web Design','Web Developement','Mobile Developer','Mern Stack']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  />
                 </h1>
                   <span className='profile-role-targline'>
                    Building applications with front and back end operations!!.
                   </span>
                 </span>
              </div>
               <div className='profile-options'>
                <button className='btn primary-btn'>
                   {" "}
                   Hire Me {" "}
                </button>
                 <a href='Christiancv.pdf' download="Christiancv.pdf">
                   <button className='btn highlighted-btn'>Get Resume</button>
                 </a>
               </div>
          </div> 
         <div className='profile-picture'>
            <div className='profile-picture-background'></div>
         </div>  
        </div>
    </div>
  )
}

export default Header