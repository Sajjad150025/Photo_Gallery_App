import React from 'react'
import BodyComponent from './Body/BodyComponent';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainComponent = () => {
  return (
    <div>
        <Header/>
        <BodyComponent/>
        <Footer/>
    </div>
  )
}

export default MainComponent;