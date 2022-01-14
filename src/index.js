// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout


// Dark Home Layout 

import DarkPortfolioLanding from './dark/PortfolioLanding';

// Element Layout

import Contact from "./elements/Contact";
import PortfolioDetails1 from "./elements/PortfolioDetails1";

import error404 from "./elements/error404";


// Blocks Layout


import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import PortfolioDetails2 from './elements/PortfolioDetails2';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={'/'} component={DarkPortfolioLanding}/>
                      
                        
                   
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details1`} component={PortfolioDetails1}/>
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details2`} component={PortfolioDetails2}/>
                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                        <Route component={error404}/>
                       

                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();