import React from 'react';

function Footer() 
{
    var currYear = new Date().getFullYear();
  
    return (
        <footer>
          <div id='footer'>
          <h6><a href='darshankamble514@gmail.com'><u>Mail us </u> </a></h6>
          <div className='contact-input'>
          <a href='#'>Contact</a>
          </div>
          <p>Copyright @ {currYear}</p>
          <p>DarshanTechs Ltd. All Rights Reserved</p>
          
          </div>
        </footer>
    );
  }
  
    export default Footer;