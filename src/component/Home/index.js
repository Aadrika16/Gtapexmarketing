import {useState} from "react"
import PopUpModel from "../PopUpModel"
import Header from "../Header"
import StatsCards from "../StatsCards"
import HeroSection from "../HeroSection"
import PitStopProtocol from "../PitStopProtocol"
import LandingPage from "../LandingPage"
import ServicesCards from "../ServicesCards"
import FooterSection from "../FooterSection"
import FounderSection from "../FounderSection"
import GtApexHero from "../GtApexHero"
import "./index.css"

const Home = () => {
  
  return (
    <div className="home-container">

       <PopUpModel />


      <Header />

      <section className="hero-wrapper">

        <div className="bg-con">

          <div className="hero-overlay">
            {/* <HeroSection /> */}
            <GtApexHero />
          </div>
        </div>

      </section>

      <StatsCards />

      <LandingPage />

      <ServicesCards />

      <PitStopProtocol />

      <FounderSection />

      <FooterSection />

    </div>
  )
}

export default Home