import React from 'react';
function Homepage() {
    return (
    <>
       <div class="page-container">
         <div class ="home-container">
                    <div class="halfcolumn">
                    <div class ="homeitemleft">
                        <p> Welcome </p>
                    </div>
                    <div class ="blurb-item">
                        <p> I write about healthcare, strategy, and technology. Here are some of my works. </p>
                    </div>
                    </div>
                    <div class="halfcolumn">
                <div class="heroimage-container">
                    <div class="heroimage-item">
                        <img alt="Headshot" width="60%" height="60%" src="Images/Headshot.jpg" style={{paddingTop:"10%"}}/>
                    </div>
                </div>
                </div>
    </div>
    </div>
    </>
    );
  }

  export default Homepage