import React from 'react';
import '../../App.css';
import HeroSec from '../HeroSec';
import Description from '../Description';
import Apps from '../Apps';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <HeroSec />
            <Description />
            <Apps />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home;
