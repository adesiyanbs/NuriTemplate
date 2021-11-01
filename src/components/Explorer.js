import React from 'react'
import Nav from "../components/Nav"
import Header from "../components/Header"
import GetStarted from "../components/GetStarted"
import Footer from "../components/Footer"
import DTable from "../components/Table"
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link,
// 	Switch
// } from 'react-router-dom';
function Explorer() {
    return (
        <div>
            <Nav/>
      <Header/>
      <DTable/>
     
      <GetStarted/>
      <Footer/>
        </div>
    )
}

export default Explorer
