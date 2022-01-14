import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Awards",
        tab3 = "Experience",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/#portfolio">Tech Stack <span>  </span></a>
                                                    React.js | C# and .NET  | JS | 
                                                </li>
                                                <li>
                                                    <a href="/#portfolio">Web and user interface design<span> - Development</span></a>
                                                    Completed a six-month intensive, full-time software development bootcamp focusing on HTML, CSS, Javascript, React and server-side fundamentals with C# and .Net.

                                                </li>
                                                <li>
                                                    <a href="/#portfolio">Video Production and Broadcast <span> - Animation/ Editing / Live Video </span></a>
                                                    After Effects, Premiere, Event Video Technician

                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Metro Nashville Arts Commission <span>- Thrive Micro-Funding</span></a>
                                               </li>
                                               <li>
                                                   <a href="/service">Creatives' Day <span>- Creative on the Rise</span></a> 2017 
                                               </li>
                                             
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service"> Nashville Software School <span> - Software Developer  
 </span></a> Aug 2021 - Jan 2022
                                               </li>
                                               <li>
                                                   <a href="/service">Tennessee Disability Coalition <span> - Youth Program Coordinator</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">FAST VIDEO PRODUCTION, LLC <span> - Owner </span></a> July 2016  - June  2018
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service"> Software Developer  <span> - Nashville Software School </span></a> 
                                               </li>
                                               <li>
                                                   <a href="/service">Bachelor of Fine Arts in Digital Filmmaking

<span> -Art Institute of Tennessee-Nashville</span></a> 
                                               </li>
                                               <li>
                                                   <a href="/service">Periscope Artist Training<span> -  Arts and Business Council of Nashville</span></a> 
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;