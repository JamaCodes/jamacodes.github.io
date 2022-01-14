import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title> Full Stack Dev || Jama Mohamed </title>
                    <meta name="description" content="Jama Mohamed is full stack developer based in Nashville." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
