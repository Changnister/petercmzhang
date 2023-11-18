import React from 'react';
function Navbar() {
    return (
        <>
            <div class="nav">
                <div class ="nav-item">
                    <a href='/'>Home</a>
                </div>
                <div class ="nav-item">
                    <a href='features'>Features</a>
                </div>
                <div class ="nav-item">
                    <a href='publications'>Publications</a>
                </div>
                <div class ="nav-item">
                    <a href="vitae">Vitae</a>
                </div>
                <div class ="nav-item">
                    <a href="projects">Projects</a>
                </div>
            </div>

            <div class="socialmedia">
                <div class ="media-item">
                    <a href="https://www.linkedin.com/in/peterczhang/"> <img src="Images/LinkedIn.png" /></a>
                </div>
            </div>
        
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
            <script src="navresponsive.js"></script>
        </>
      );
}

export default Navbar