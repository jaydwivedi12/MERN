import React from 'react'
import BottomLine from './BottomLine';
import FAQ from './FAQ';
import Footer from './Footer';
import FooterSignup from './FooterSignup';
import Front from './Front';
import LeftTextCard from './LeftTextCard';
import RightTextCard from './RightTextCard';


const HomePage= ()=> {
    return (
      <div>
        <Front />
        <BottomLine />
        <LeftTextCard />
        <BottomLine />
        <RightTextCard />
        <BottomLine />
        <FAQ />
        <FooterSignup />
        <BottomLine />
        <Footer />
      </div>
    );
  }

export default HomePage
