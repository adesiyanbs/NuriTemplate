import Nav from "../components/Nav"
import React from 'react'
import Footer from "../components/Footer"
import Header from "../components/Header"
import GetStarted from "../components/GetStarted"
import SinlgeBlock from "./SinlgeBlock"
import Blocktransactions from "./Blocktransactions"



function Single() {
    return (
        <div>
            <Nav/>
      <Header/>
      <SinlgeBlock/>
      <Blocktransactions/>
      <GetStarted/>

      <Footer/>
            
        </div>
    )
}

export default Single
