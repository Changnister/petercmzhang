import React from 'react';
function PublicationPage() {

    const scholarly = [
        {
            date: "March 27, 2023:",
            link: {
                href: "https://journals.sagepub.com/doi/10.1177/17151635231164622",
                title: "To succeed as health care innovators, pharmacists need to cultivate an entrepreneurial mindset"
            },
            source: "Zhang, P.C., Austin, Z. (2023). To succeed as health care innovators, pharmacists need to cultivate an entrepreneurial mindset. Canadian Pharmacists Journal / Revue Des Pharmaciens Du Canada, 156(3), 100-111. doi:10.1177/17151635231164622"
        },

        {
            date: "October 11, 2022:",
            link: {
                href: "https://link.springer.com/referenceworkentry/10.1007/978-3-030-50247-8_72-1",
                title: "Patient Safety from a Pharmacy Perspective"
            },
            source: "Ho, C., Zhang, P.C. (2022). Patient Safety from a Pharmacy Perspective. In: Encyclopedia of Evidence in Pharmaceutical Public Health and Health Services Research in Pharmacy. Springer, Cham. doi.org/10.1007/978-3-030-50247-8_72-1"
        },

        {
            date: "September 20, 2021:",
            link: {
                href: 'https://www.cureus.com/articles/70587-3d-printed-personal-protective-face-shields-during-the-covid-19-pandemic-a-survey-of-canadian-frontline-workers',
                title: '3D-Printed Personal Protective Face Shields During the COVID-19 Pandemic: A Survey of Canadian Frontline Workers'
            },
            source: 'Daud, A., Hussein, I. M., Zhang, P. C., Ahmed, Y., Trac, J., Vujovic, N., Rizvi, S. F., & Kuzyk, P. R. (2021). 3D-Printed personal protective face shields during the covid-19 pandemic: A survey of Canadian frontline workers. Cureus. doi:10.7759/cureus.18141'
        },

        {
            date: "September 20, 2021:",
            link: {
                href: "https://journals.sagepub.com/doi/full/10.1177/17151635211044474",
                title: "The future of pharmacy is intertwined with digital health innovation"
            },
            source: "Zhang, P. C. (2021). The future of pharmacy is intertwined with digital health innovation. Canadian Pharmacists Journal / Revue Des Pharmaciens Du Canada, 155(1), 7-8. doi:10.1177/17151635211044474"
        },

        {
            date: "April 27, 2021:",
            link: {
                href: "https://gh.bmj.com/content/6/4/e005125.full",
                title: 'Overcoming vaccine deployment challenges among the hardest to reach: lessons from polio elimination in India'
            },
            source: 'Bellatin, A., Hyder, A., Rao, S., Zhang, P. C., & Mcgahan, A. M. (2021). Overcoming vaccine deployment challenges among the hardest to reach: Lessons from polio elimination in India. BMJ Global Health, 6(4). doi:10.1136/bmjgh-2021-005125'
        },

        {
            date: "November 23, 2020:",
            link: {
                href: 'https://threedmedprint.biomedcentral.com/articles/10.1186/s41205-020-00089-y',
                title: 'Optimization of community-led 3D printing for the production of protective face shields'
            },
            source: 'Zhang, P. C., Ahmed, Y., Hussein, I. M., Afenu, E., Feasson, M., & Daud, A. (2020). Optimization of community-led 3D printing for the production of protective face shields. 3D Printing in Medicine, 6(1). doi:10.1186/s41205-020-00089-y'
        },
    ]

    const opinions = [
        {
            date: "May 6, 2023:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2023/05/06/preventive-health-care-why-privately-funded-programs-are-reluctant-to-fund-it.html",
                title: 'Preventive health care: Why privately funded programs are reluctant to fund it'
            },
            source: 'Toronto Star | Co-author: Liju Mathew'
        },

        {
            date: "April 3, 2023:",
            link: {
                href: "https://healthydebate.ca/2023/04/topic/synthetic-data-clinical-trials/",
                title: 'Synthetic data may revolutionize clinical trials – and save lives'
            },
            source: 'Healthy Debate'
        },

        {
            date: "March 22, 2023:",
            link: {
                href: "https://www.theglobeandmail.com/opinion/article-modernized-home-care-can-help-stabilize-health-costs/",
                title: 'Modernized home care can help stabilize health costs'
            },
            source: 'Globe and Mail | Co-author: Dr. Anser Daud'
        },

        {
            date: "March 20, 2023:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2023/03/20/donating-to-charity-can-offer-tax-benefits.html",
                title: 'The benefits of giving include tax credits'
            },
            source: 'Toronto Star | Co-author: Avital Pitkis'
        },

        {
            date: "March 5, 2023:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2023/03/05/overcoming-language-barriers-key-to-providing-health-care.html",
                title: 'Overcoming language barriers key to providing health-care'
            },
            source: 'Toronto Star | Co-author: Dr. Avinash Pandey'
        },

        {
            date: "November 21, 2022:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2022/11/21/ask-a-pharmacist-before-you-split-tablets-for-your-children.html",
                title: 'Ask a pharmacist before you split tablets for your children'
            },
            source: 'Toronto Star'
        },

        {
            date: "November 21, 2022:",
            link: {
                href: "https://ottawacitizen.com/opinion/opinion-internet-based-mental-health-care-deserves-a-boost",
                title: 'Internet-based mental-health care deserves a boost'
            },
            source: 'Ottawa Citizen | Co-author: Jinyuru Yang & Abrar Ahmed'
        },

        {
            date: "September 12, 2022:",
            link: {
                href: "https://healthydebate.ca/2022/09/topic/vaccine-hesitancy-reviving-diseases/",
                title: 'Vaccine hesitancy is reviving long dead diseases'
            },
            source: 'Healthy Debate | Co-author: Jinyuru Yang & Abrar Ahmed'
        },

        {
            date: "May 31, 2022:",
            link: {
                href: "https://policyoptions.irpp.org/magazines/may-2022/pharmacists-prescribing-savings/",
                title: 'How pharmacist prescribing can alleviate health-care system pressures'
            },
            source: 'Policy Options | Co-author: Dr. Mina Tadrous, PharmD, PhD'
        },

        {
            date: "May 6, 2022:",
            link: {
                href: "https://poetsandquants.com/students/the-rotman-review-how-trade-missions-teach-mbas-to-think-international/?pq-category=students",
                title: 'The Rotman Review: How Trade Missions Teach MBAs To Think International'
            },
            source: 'Poets & Quants'
        },

        {
            date: "May 2, 2022:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2022/05/02/elon-musk-social-media-giants-must-prioritize-mental-health-and-well-being.html",
                title: 'Elon Musk, social media giants, must prioritize mental health and well-being'
            },
            source: 'Toronto Star | Co-author: Anser Daud'
        },

        {
            date: "March 31, 2022:",
            link: {
                href: "https://poetsandquants.com/2022/03/30/the-rotman-review-navigating-the-future-of-digital-marketing/?pq-category=students",
                title: 'The Rotman Review: Navigating the Future of Digital Marketing'
            },
            source: 'Poets & Quants'
        },

        {
            date: "February 23, 2022:",
            link: {
                href: "https://poetsandquants.com/2022/02/23/the-rotman-review-a-year-in-the-life-of-a-mba-board-fellow/?pq-category=students",
                title: 'The Rotman Review: A Year In The Life Of A MBA Board Fellow'
            },
            source: 'Poets & Quants'
        },

        {
            date: "February 8, 2022:",
            link: {
                href: "https://www.thespec.com/opinion/contributors/2022/02/08/bleeding-disorders-in-women-need-more-attention.html",
                title: 'Bleeding disorders in women need more attention'
            },
            source: 'The Hamilton Spectator'
        },

        {
            date: "February 4, 2022:",
            link: {
                href: "https://poetsandquants.com/2022/02/04/the-rotman-review-how-an-mba-shapes-success-in-finance/",
                title: 'The Rotman Review: How An MBA Shapes Success In Finance'
            },
            source: 'Poets & Quants'
        },

        {
            date: "December 31, 2021:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2021/12/31/despite-a-place-on-pharmacy-shelves-homeopathy-has-no-role-in-patient-care.html",
                title: 'Despite a place on pharmacy shelves, homeopathy has no role in patient care'
            },
            source: 'Toronto Star'
        },

        {
            date: "December 5, 2021:",
            link: {
                href: "https://poetsandquants.com/2021/12/05/the-rotman-review-why-sustainable-finance-is-critical-to-mbas/?pq-category=students",
                title: 'The Rotman Review: Why Sustainable Finance Is Critical To MBAs'
            },
            source: 'Poets & Quants'
        },

        {
            date: "November 15, 2021:",
            link: {
                href: "https://nationalpost.com/wellness/science/the-dangers-of-antimicrobial-drug-resistance-must-not-be-ignored/wcm/2c79c9b2-6e06-4db3-8d07-fec5e8cf21d7/amp/",
                title: 'The dangers of antimicrobial drug resistance must not be ignored'
            },
            source: 'Healthy Debate & National Post | Co-Author: Abrar Ahmed'
        },

        {
            date: "November 3, 2021:",
            link: {
                href: "https://poetsandquants.com/2021/11/03/the-rotman-review-building-your-own-time-portfolio/?pq-category=students",
                title: 'The Rotman Review: Building Your Own Time “Portfolio”'
            },
            source: 'Poets & Quants'
        },

        {
            date: "September 22, 2021:",
            link: {
                href: "https://poetsandquants.com/2021/09/22/the-rotman-review-how-academic-research-makes-mbas-more-valuable/?pq-category=students",
                title: 'The Rotman Review: How Academic Research Makes MBAs More Valuable'
            },
            source: 'Poets & Quants'
        },

        {
            date: "September 10, 2021:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2021/09/10/as-election-day-looms-voters-have-the-chance-to-be-heard-on-the-federal-funding-of-health-care.html",
                title: 'As election day looms, voters have the chance to be heard on the federal funding of health care'
            },
            source: 'Toronto Star | Co-author: Abrar Ahmed'
        },

        {
            date: "August 22, 2021:",
            link: {
                href: "https://poetsandquants.com/2021/08/22/the-rotman-review-preparing-for-the-future-of-machine-learning/",
                title: 'The Rotman Review: Preparing For The Future Of Machine Learning'
            },
            source: 'Poets & Quants'
        },

        {
            date: "August 18, 2021:",
            link: {
                href: "https://healthydebate.ca/2021/08/topic/communication-science-curriculum-pandemic",
                title: 'Communication must become an essential component of the science education curriculum'
            },
            source: 'Healthy Debate | Co-authors: Morgan Garland & Abrar Ahmed'
        },

        {
            date: "August 16, 2021:",
            link: {
                href: "https://www-2.rotman.utoronto.ca/insightshub/healthcare-life-sciences/overcoming-vaccines",
                title: 'To overcome vaccine hesitancy, governments need to show citizens what’s in it for them'
            },
            source: 'Rotman Insights Hub | Co-author: Dr. Anita M. McGahan, PhD'
        },

        {
            date: "July 29, 2021:",
            link: {
                href: "https://www.hilltimes.com/story/2021/07/29/to-move-beyond-the-pandemic-canada-needs-to-look-globally/269339/",
                title: 'To move beyond the pandemic, Canada needs to look globally'
            },
            source: 'The Hill Times | Co-author: Abrar Ahmed'
        },

        {
            date: "June 24, 2021:",
            link: {
                href: "https://jps.library.utoronto.ca/index.php/utmj/issue/view/2508/479",
                title: 'Clinicians as community advocates: interplays of vaccines and society'
            },
            source: 'University of Toronto Medical Journal | Co-authors: Yousuf Ahmed & Dr. Jennifer Kwan, MD'
        },

        {
            date: "May 27, 2021:",
            link: {
                href: "https://hospitalnews.com/when-covid-19-meets-allergy-season/",
                title: 'When COVID-19 meets allergy season'
            },
            source: 'Hospital News | Co-authors: Annie Yao & Dr. Certina Ho, BScPharm, MEd, PhD'
        },

        {
            date: "May 3, 2021:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2021/05/03/rigorous-scrutiny-of-covid-19-vaccines-should-bolster-not-erode-confidence-in-immunization-safety.html",
                title: 'Rigorous scrutiny of COVID-19 vaccines should bolster, not erode, confidence in immunization safety'
            },
            source: 'Toronto Star | Co-author: Anser Daud'
        },

        {
            date: "April 19, 2021:",
            link: {
                href: "https://www.thespec.com/opinion/contributors/2021/04/19/should-more-of-our-foods-be-fortified-with-vitamin-d.html",
                title: 'Should more of our foods be fortified with vitamin D?'
            },
            source: 'The Hamilton Spectator | Co-author: Dr. Jinglin Tang, PharmD'
        },

        {
            date: "April 16, 2021:",
            link: {
                href: "https://healthydebate.ca/opinions/covid-19-and-insomnia/",
                title: 'COVID-19 and insomnia: Pills are not the answer'
            },
            source: 'Healthy Debate | Co-authors: Yousuf Ahmed & Anser Daud'
        },

        {
            date: "April 7, 2021:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2021/04/07/prioritize-one-shot-covid-19-vaccines-for-the-hard-to-reach.html",
                title: 'Prioritize one-shot COVID-19 vaccines for the hard to reach'
            },
            source: 'Toronto Star'
        },

        {
            date: "March 5, 2021:",
            link: {
                href: "https://www.thespec.com/opinion/contributors/2021/03/05/mobilizing-pharmacists-is-key-to-immunization-success.html",
                title: 'Mobilizing pharmacists is key to immunization success'
            },
            source: 'The Hamilton Spectator | Co-author: Dr. Ming Hu, PhD'
        },

        {
            date: "February 16, 2021:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2021/02/16/cyberchondria-an-unexpected-side-effect-of-digitizing-medical-information.html",
                title: 'Cyberchondria: An unexpected side effect of digitizing medical information'
            },
            source: 'Toronto Star | Co-author: Yousuf Ahmed'
        },

        {
            date: "January 4, 2021:",
            link: {
                href: "https://ottawacitizen.com/opinion/bala-and-zhang-to-win-against-covid-19-we-must-put-vaccine-hesitancy-behind-us",
                title: 'Bala and Zhang: To win against COVID-19, we must put vaccine hesitancy behind us'
            },
            source: 'Ottawa Citizen | Co-author: Sudarshan Bala'
        },

        {
            date: "January 3, 2021:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2021/01/03/although-alarming-mutated-strains-of-covid-19-are-not-a-cause-for-panic.html",
                title: 'Although alarming, mutated strains of COVID-19 are not a cause for panic'
            },
            source: 'Toronto Star | Co-author: Anser Daud'
        },

        {
            date: "October 28, 2020:",
            link: {
                href: "https://hospitalnews.com/antimicrobial-stewardship-in-the-face-of-covid-19/",
                title: 'Antimicrobial Stewardship in the face of COVID-19'
            },
            source: 'Hospital News | Co-authors: Corlissa Chan & Dr. Certina Ho, BScPharm, MEd, PhD'
        },

        {
            date: "October 4, 2020:",
            link: {
                href: "https://windsorstar.com/opinion/letters/guest-column-naloxone-needs-to-be-in-hands-of-as-many-people-as-possible",
                title: 'Naloxone needs to be in hands of as many people as possible'
            },
            source: 'Windsor Star'
        },

        {
            date: "October 3, 2020:",
            link: {
                href: "https://www.thespec.com/opinion/contributors/2020/10/02/we-need-naloxone-kits-in-more-hands-in-this-opioid-crisis.html",
                title: 'We need naloxone kits in more hands in this opioid crisis'
            },
            source: 'The Hamilton Spectator'
        },

        {
            date: "September 9, 2020:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2020/09/09/as-pandemic-forces-change-its-a-good-time-for-canadians-to-quit-smoking.html",
                title: 'As pandemic forces change, it’s a good time for Canadians to quit smoking'
            },
            source: 'Toronto Star | Co-author: Anser Daud'
        },

        {
            date: "August 28, 2020:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2020/08/27/its-time-to-normalize-suicide-prevention-training-at-the-workplace.html",
                title: 'It’s time to normalize suicide prevention training at the workplace'
            },
            source: 'Toronto Star'
        },

        {
            date: "August 14, 2020:",
            link: {
                href: "http://cmajblogs.com/becoming-a-pit-crew-for-frontline-healthcare-workers-during-the-covid-19-pandemic/",
                title: 'Becoming a Pit Crew for Frontline Healthcare Workers during the COVID-19 Pandemic'
            },
            source: 'CMAJ Blogs | Co-authors: Yousuf Ahmed, Anser Daud, Isra Hussein, John Junghan, Maroof Khalid, Maham Khalid, & Samveg Shah'
        },

        {
            date: "July 14, 2020:",
            link: {
                href: "https://www.thestar.com/opinion/contributors/2020/07/14/when-covid-19-pandemic-meets-the-flu-season.html",
                title: 'When COVID-19 pandemic meets the flu season.'
            },
            source: 'Toronto Star | Co-authors: Dr. Vince Teo, PharmD & Dr. Houman Khosravani, MD, MSc, PhD'
        },
    ]

    const professional = [
        {
            date: "April 25, 2022:",
            link: {
                href: "files/Hemophilia Ontario Strategic Plan 2022 - 2025.pdf",
                title: "Hemophilia Ontario Strategic Plan 2022 - 2025"
            },
            source: "Hemophilia Ontario"
        },
    ]

    const art = [
        {
            date: "January 6, 2021:",
            link: {
                href: "https://www.flipsnack.com/theherd/the-herd-volume-3.html?p=14",
                title: "Sudarshan"
            },
            source: "The Herd Archive - Volume 3"
        },

        {
            date: "December 16, 2020:",
            link: {
                href: "http://www.myseumoftoronto.com/programming/qq-lifestyle-and-family/peter-zhang/",
                title: "Quarentine Qapsule"
            },
            source: "Myseum of Toronto"
        },

        {
            date: "September 10, 2020:",
            link: {
                href: "https://www.flipsnack.com/theherd/the-herd-volume-2.html?p=20",
                title: "Stories of Korea"
            },
            source: "The Herd Archive - Volume 2"
        },
    ]

    return (
    <>
         <div class ="home-container">
        <div class="list-container">
            <div class="list-image">
                <img alt="Writing" src="Images/Writingcover.jpg"/>
            </div>

            <div class='list-introduction'>Scholarly</div>
           
            {scholarly.map((scholarly) => {
            return (
                <div class='list-items'>
             <p>
                <b> {scholarly.date} </b>
                <a href={scholarly.link.href} target="blank"> {scholarly.link.title} </a>
                <p className='subtitle'> {scholarly.source} </p>
                </p>
                </div>
            )
            })}

           <div class='list-introduction'>Opinions</div>

           {opinions.map((opinions) => {
            return (
                <div class='list-items'>
             <p>
                <b> {opinions.date} </b>
                <a href={opinions.link.href} target="blank"> {opinions.link.title} </a>
                <p className='subtitle'> {opinions.source} </p>
                </p>
                </div>
            )
            })}

            <div class='list-introduction'>Professional</div>

            {professional.map((professional) => {
            return (
                <div class='list-items'>
             <p>
                <b> {professional.date} </b>
                <a href={professional.link.href} target="blank"> {professional.link.title} </a>
                <p className='subtitle'> {professional.source} </p>
                </p>
                </div>
            )
            })}

            <div class='list-introduction'>Art</div>

            {art.map((art) => {
            return (
                <div class='list-items'>
             <p>
                <b> {art.date} </b>
                <a href={art.link.href} target="blank"> {art.link.title} </a>
                <p className='subtitle'> {art.source} </p>
                </p>
                </div>
            )
            })}
           
        </div>
    </div>
    </>
    );
  }

  export default PublicationPage