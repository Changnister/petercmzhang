import React from 'react';
function FeaturePage() {

    const features = [
        {
            date: "August 30, 2023",
            link: {
                href: "https://reachalliance.org/news/2023/08/reach-heads-to-new-york-for-afs-youth-assembly/",
                title: "Reach Building Community and Sharing Insights in New York City"
            },
            source: "Reach Alliance, Munk School of Global Affairs and Public Policy"
        },

        {
            date: "July 26, 2023",
            link: {
                href: "https://reachalliance.org/news/2023/07/alumni-engagement-and-mentorship-at-reach/",
                title: "Reach’s Approach to Alumni Engagement and Mentorship"
            },
            source: "Reach Alliance, Munk School of Global Affairs and Public Policy"
        },

        {
            date: "June 20, 2023:",
            link: {
                href: 'https://www.clearadmit.com/2023/06/real-humans-of-jj-toronto-rotman-pharmd-mba-22-marketing-associate/',
                title: 'Real Humans of J&J: Peter Zhang, Toronto Rotman PharmD/MBA ’22, Marketing Associate'
            },
            source: 'Clear Admit'
        },

        {
            date: "May 2, 2022:",
            link: {
                href: "https://www.rotman.utoronto.ca/Connect/MediaCentre/NewsReleases/20220502",
                title: "Rotman School Students Among the Global Best & Brightest MBAs from the Class of 2022"
            },
            source: "Rotman School of Management, University of Toronto"
        },

        {
            date: "May 1, 2022:",
            link: {
                href: "https://poetsandquants.com/students/2022-best-brightest-mba-peter-zhang-university-of-toronto-rotman/?pq-category=students",
                title: '2022 Best & Brightest MBA: Peter Zhang, University of Toronto (Rotman)'
            },
            source: 'Poets & Quants'
        },

        {
            date: "May 1, 2022:",
            link: {
                href: 'https://poetsandquants.com/students/100-best-brightest-mbas-class-of-2022/',
                title: '100 Best & Brightest MBAs: Class of 2022'
            },
            source: 'Poets & Quants'
        },

        {
            date: "January 17, 2022:",
            link: {
                href: 'https://reachalliance.org/performance-coaching-enhances-teamwork-for-better-research/',
                title: 'Performance Coaching Enhances Teamwork For Better Research'
            },
            source: 'Reach Alliance, Munk School of Global Affairs and Public Policy'
        },

        {
            date: "August 7, 2021:",
            link: {
                href: 'http://www-2.rotman.utoronto.ca/insightshub/economics-trade-policy/August-2021',
                title: 'Rotman professors on workplace diversity programs, why stadiums are the unsung heroes of the pandemic and more'
            },
            source: 'Rotman School of Management, University of Toronto'
        },

        {
            date: "July 21, 2021:",
            link: {
                href: 'https://journals.lww.com/academicmedicine/Pages/2021-Honorable-Mentions.aspx',
                title: '2021 Call for Trainee-Authored Letters to the Editor: Honorable Mentions'
            },
            source: 'Academic Medicine'
        },

        {
            date: "June 21, 2021:",
            link: {
                href: 'https://www.pharmacy.utoronto.ca/news-announcements/class-2021-honours-and-fourth-year-awards',
                title: 'Class of 2021 Honours and Fourth Year Awards'
            },
            source: 'Leslie Dan Faculty of Pharmacy, University of Toronto'
        },

        {
            date: "June 2, 2021:",
            link: {
                href: 'https://www-2.rotman.utoronto.ca/insightshub/economics-trade-policy/May-2021-Profs',
                title: 'Rotman professors on why power sharing works, what cities will look like after the pandemic and more'
            },
            source: 'Rotman School of Management, University of Toronto'
        },

        {
            date: "May 6, 2021:",
            link: {
                href: 'https://www.eurekalert.org/pub_releases/2021-05/uotr-ipv050621.php',
                title: "India's polio vaccination provides valuable insights for mass vaccination campaigns"
            },
            source: 'EurekaAlert, American Association for the Advancement of Science'
        },

        {
            date: "May 6, 2021: ",
            link: {
                href: 'https://www.rotman.utoronto.ca/Connect/MediaCentre/NewsReleases/20210506',
                title: "Lessons Learned from India’s Polio Vaccination Program Provide Valuable Insights for Future Mass Vaccination Initiatives."
            },
            source: 'Rotman School of Management, University of Toronto'
        },

        {
            date: "April 16, 2021: ",
            link: {
                href: 'http://www.newcollege.utoronto.ca/news/peter-zhang-award/',
                title: "Joan E. Foley Quality of Student Experience Award"
            },
            source: 'New College, University of Toronto'
        },

        {
            date: "April 16, 2021: ",
            link: {
                href: 'https://alumni.utoronto.ca/awards-excellence-recipients-2021#foleystaff',
                title: "Joan E. Foley Quality of Student Experience Award"
            },
            source: 'Awards of Excellence, University of Toronto'
        },

        {
            date: "April 5, 2021: ",
            link: {
                href: 'https://www-2.rotman.utoronto.ca/insightshub/economics--trade-policy/Rotman-research-March-2021',
                title: "Rotman experts on how remote work has transformed cities and why the fight against COVID-19 may never end"
            },
            source: 'Rotman School of Management, University of Toronto'
        },

        {
            date: "March 31, 2021:",
            link: {
                href: 'https://pharmacy.utoronto.ca/news-announcements/national-pharmacy-awards-recognize-ldfp-students-and-campaigns',
                title: "National pharmacy awards recognize LDFP students and campaigns"
            },
            source: 'Leslie Dan Faculty of Pharmacy, University of Toronto'
        },

        {
            date: "March 24, 2021: ",
            link: {
                href: 'https://www.utoronto.ca/news/superstar-pharmacists-play-critical-role-vaccine-clinic-hosted-u-t-s-st-george-campus',
                title: "National pharmacy awards recognize LDFP students and campaigns"
            },
            source: 'Leslie Dan Faculty of Pharmacy, University of Toronto'
        },

        {
            date: "March 24, 2021: ",
            link: {
                href: 'https://www.utoronto.ca/news/superstar-pharmacists-play-critical-role-vaccine-clinic-hosted-u-t-s-st-george-campus',
                title: "Superstar' pharmacists play critical role at vaccine clinic hosted on U of T’s St. George campus"
            },
            source: 'University of Toronto'
        },

        {
            date: "March 18, 2021:",
            link: {
                href: 'https://pharmacy.utoronto.ca/news-announcements/pharmacists-lead-vaccine-preparation-university-toronto-hosted-clinic',
                title: "Pharmacists leads COVID-19 vaccine preparation at U of T-hosted clinic"
            },
            source: 'Leslie Dan Faculty of Pharmacy, University of Toronto'
        },

        {
            date: "January 18, 2021:",
            link: {
                href: 'https://www.utihi.com/post/in-conversation-with-peter-zhang-on-the-role-of-grassroots-initiatives-3d-printed-ppe',
                title: "In Conversation with Peter Zhang: On the Role of Grassroots Initiatives & 3D Printed PPE"
            },
            source: 'Institute for Healthcare Improvement, University of Toronto Chapter'
        },

        {
            date: "January 5, 2021:",
            link: {
                href: 'https://www-2.rotman.utoronto.ca/insightshub/economics-trade-policy/steam-education-reinvesting-in-auto-sector',
                title: "Rotman experts speak up about STEAM education, reinvesting in the auto sector and the COVID-19 vaccine"
            },
            source: 'Rotman School of Management, University of Toronto'
        },

        {
            date: "November 30, 2020:",
            link: {
                href: 'https://reachalliance.org/meet-peter-zhang-of-team-india-2018-19-polio-eradication/',
                title: "Meet Peter Zhang of Team India 2018/19: Polio Eradication"
            },
            source: 'Reach Alliance, Munk School of Global Affairs and Public Policy'
        },

        {
            date: "August 31, 2020:",
            link: {
                href: 'https://www-2.rotman.utoronto.ca/insightshub/details.aspx?category=Economics,%20Trade%20and%20Policy&region=%&researchid=1429',
                title: "MRotman experts on how to win with machine learning - and why we can’t let this crisis go to waste"
            },
            source: 'Rotman School of Management, University of Toronto'
        },

        {
            date: "August 31, 2020:",
            link: {
                href: 'https://www-2.rotman.utoronto.ca/insightshub/details.aspx?category=Economics,%20Trade%20and%20Policy&region=%&researchid=1429',
                title: "Rotman experts on how to win with machine learning - and why we can’t let this crisis go to waste"
            },
            source: 'Rotman School of Management, University of Toronto'
        },

        {
            date: "July 27, 2020:",
            link: {
                href: 'https://www.pharmacy.utoronto.ca/news-announcements/five-pharmacy-student-research-teams-earn-u-t-covid-19-funding',
                title: "Five Pharmacy Student Research Teams Earn U of T COVID-19 Funding"
            },
            source: 'Leslie Dan Faculty of Pharmacy, University of Toronto'
        },

        {
            date: "July 16, 2020:",
            link: {
                href: 'https://www.pharmacy.utoronto.ca/news-announcements/when-covid-19-pandemic-meets-flu-season',
                title: "When COVID-19 Pandemic Meets the Flu Season"
            },
            source: 'Leslie Dan Faculty of Pharmacy, University of Toronto'
        },

        {
            date: "June 15, 2020:",
            link: {
                href: 'https://twitter.com/Sflecce/status/1272631951237709824',
                title: "3DPPE GTHA Printing Milestone of 20,000 Face Shields"
            },
            source: 'Stephen Lecce, Ontario Minister of Education, Twitter'
        },

        {
            date: "June 9, 2020:",
            link: {
                href: 'https://twitter.com/celliottability/status/1270481211358666753',
                title: "3DPPE GTHA Printing Milestone of 20,000 Face Shields"
            },
            source: 'Christine Elliott, Onario Minister of Health and Deputy Premier, Twitter'
        },

        {
            date: "April 30, 2020:",
            link: {
                href: 'https://www.rotman.utoronto.ca/Degrees/LifeAtRotman/StudentStories/PPE--alumni',
                title: "Turning to 3D printers for replenishing PPE supplies"
            },
            source: 'Rotman School of Management, University of Toronto'
        },

        {
            date: "April 29, 2020:",
            link: {
                href: 'https://pharmacy.utoronto.ca/news-announcements/pharmacy-students-lead-initiative-supply-vital-equipment-health-care-workers',
                title: "Pharmacy Students Lead Initiative to Supply Vital Equipment to Health Care Workers"
            },
            source: 'Leslie Dan Faculty of Pharmacy, University of Toronto'
        },

        {
            date: "November 2, 2017:",
            link: {
                href: 'https://www.youtube.com/watch?v=60WPPfNdar8',
                title: "Interstellar Theme"
            },
            source: 'Phollies 2017, Isabel Bader Theatre'
        },

        {
            date: "April 4, 2017:",
            link: {
                href: 'http://www.newcollege.utoronto.ca/news/twelve-new-college-students-receive-gordon-cressy-awards/',
                title: "Twelve New College Students Receive Gordon Cressy Awards"
            },
            source: 'New College, University of Toronto'
        },

        {
            date: "January 24, 2017:",
            link: {
                href: 'http://www.newcollege.utoronto.ca/news/new-college-students-u-of-t-president-conversation/',
                title: "New College students and U of T President get together for an evening of conversation"
            },
            source: 'New College, University of Toronto'
        },

        {
            date: "January 24, 2017:",
            link: {
                href: 'http://www.newcollege.utoronto.ca/news/new-college-students-u-of-t-president-conversation/',
                title: "New College students and U of T President get together for an evening of conversation"
            },
            source: 'New College, University of Toronto'
        },
    ]

    const interviews = [
        {
            date: "September 24, 2021:",
            link: {
                href: "https://www.pharmacy.utoronto.ca/programs/pharmd-mba",
                title: 'Why choose a PharmD-MBA at the Leslie Dan Faculty of Pharmacy?'
            },
            source: 'Leslie Dan Faculty of Pharmacy, University of Toronto'
        },]

    return (
    <>
         <div class ="home-container">
        <div class="list-container">
            <div class="list-image">
                <img alt="Night View" src="Images/Featurescover.jpg"/>
            </div>

            <div class='list-introduction'>Features</div>
           
            {features.map((feature) => {
            return (
                <div class='list-items'>
             <p>
                <b> {feature.date} </b>
                <a href={feature.link.href} target="blank"> {feature.link.title} </a>
                <p className='subtitle'> {feature.source} </p>
                </p>
                </div>
            )
            })}

           <div class='list-introduction'>Interviews</div>

           {interviews.map((feature) => {
            return (
                <div class='list-items'>
             <p>
                <b> {feature.date} </b>
                <a href={feature.link.href} target="blank"> {feature.link.title} </a>
                <p className='subtitle'> {feature.source} </p>
                </p>
                </div>
            )
            })}
           
        </div>
    </div>
    </>
    );
  }

  export default FeaturePage