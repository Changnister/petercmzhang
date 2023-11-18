import React from 'react';
function ProjectPage() {

    const projects = [
        {
            date: "August 30, 2023",
            link: {
                href: "https://reachalliance.org/news/2023/08/reach-heads-to-new-york-for-afs-youth-assembly/",
                title: "Reach Building Community and Sharing Insights in New York City"
            },
            source: "Reach Alliance, Munk School of Global Affairs and Public Policy"
        },
    ]

    return (
    <>
         <div class ="home-container">
        <div class="list-container">
            <div class="list-image">
                <img alt="Speaking" src="Images/Projects.JPG"/>
            </div>

            <div class='list-introduction'>Projects</div>
           
            {projects.map((projects) => {
            return (
                <div class='list-items'>
             <p>
                <b> {projects.date} </b>
                <a href={projects.link.href} target="blank"> {projects.link.title} </a>
                <p className='subtitle'> {projects.source} </p>
                </p>
                </div>
            )
            })}

        </div>
    </div>
    </>
    );
  }

  export default ProjectPage