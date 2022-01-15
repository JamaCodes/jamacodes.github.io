import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn} from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const SocialShare = [
   
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/jama-mohamed-2378308b/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/yung__tv'},
   
]

class PortfolioDetails1 extends Component{
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
    }
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Breadcrump Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"  data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title text-white">Jama Mohamed's Portfolio</h2>
                                    <p>The Last 6 Months</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Breadcrump Area */}

                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        <h2>Recent Projects</h2>
                                        <p className="subtitle">Check out the videos below to get a more indepth look at my frontend and backend projects.</p>
                                        <p>I spent the last six-months in an intense and immersive full-time software development bootcamp through Nashville Software School focusing on HTML, CSS, Javascript, React and server-side fundamentals with C# and .Net. If I could talk to myself six months ago, wouldn't even know where to begin.</p>

                                        <div className="portfolio-view-list d-flex flex-wrap">
                                            <div className="port-view">
                                                <span>Software Developer</span>
                                                <h4>Full Stack</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Project Types</span>
                                                <h4>Single Page Applications and Web Api's</h4>
                                            </div>

                                            <div className="port-view">
                                                <span>Program</span>
                                                <h4><a href="https://nashvillesoftwareschool.com/programs/20220214cohort55/#syllabus" target="_blank">View</a></h4>
                                            </div>
                                        </div>

                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="portfolio-thumb-inner">
                                        {/* <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div> */}
                                        
                                        <div className="thumb mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}

                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="theme-color font--18 fontWeight600">Related Work</span>
                                    <h2>A Time Before Web Development</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--10">
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-01.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="https://secure.belcourt.org/websales/pages/TicketSearchCriteria.aspx?evtinfo=115426~3a28c818-27b3-492b-8c64-14556ad966cd" target="_blank">Disability Advocacy Creative Placemaking</a></h4>
                                        <p className=" text-justify"><a href="https://secure.belcourt.org/websales/pages/TicketSearchCriteria.aspx?evtinfo=115426~3a28c818-27b3-492b-8c64-14556ad966cd" target="_blank">"Jama Mohamed was awarded micro-funding from Metro Arts to collaborate with the TN Disability Coalition to empower families and individuals effected by life long special needs. Jama has visited the homes of parents and individuals with special needs personally to teach the basics of creating video. On each visit, using his equipment, they directed their own 5-shot short. This project aims to spotlight an underrepresented community. By sharing these stories, they can work to normalize their experience and the experience of others who also have life-long special needs"</a></p>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                            {/* Start Single Portfolio */}
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="related-work text-center mt--30">
                                    <div className="thumb">
                                        <a href="/portfolio-details">
                                            <img src="/assets/images/portfolio/related-image-02.jpg" alt="Portfolio-images"/>
                                        </a>
                                    </div>
                                    <div className="inner">
                                        <h4><a href="https://www.facebook.com/events/belcourt-theatre/sh-pizza-and-a-movie-do-the-right-thing/1708078545960341/" target="_blank">Film & Dialoge</a></h4>
                                        <p className="text-justify"> In 2018 rented out the Belcourt Theatre and developed a partnership with Slim and Husky’s Pizza for them to sell pizzas at screenings of “90’s Blassics”. It was a fun project that allowed me to organize community discussions with various community leaders about themes of the films and how they relate to today with a splash of nostalgia for 90's black films.
</p>
                                    </div>
                                </div>
                            </div>
                             {/* End Single Portfolio */}
                        </div>
                    </div>
                </div>
                {/* End Related Work */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />  


            </React.Fragment>
        )
    }
}
export default PortfolioDetails1;
