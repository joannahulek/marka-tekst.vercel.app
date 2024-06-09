import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import MarKa from "./components/MarKa";
import About from "./components/About";
import Copywriting from "./components/Copywriting";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import contactData from "./components/content/contactData.json"
const App: React.FC = () => {

    const [menuHTML, activeTab] = Menu();

    return (
        <Container>
            {menuHTML}
            <Hero/>
            <div className="container">
                {activeTab === '#marka' && <div className="web-content" id="marka"><MarKa/></div>}
                {activeTab === '#about' && <div className="web-content" id="about"><About/></div>}
                {activeTab === ('#copywriting') && <div className="web-content" id="copywriting"><Copywriting/></div>}
                {activeTab === '#portfolio' && <div className="web-content" id="portfolio"><Portfolio/></div>}
                {activeTab === '#contact' && <div className="web-content" id="contact"><Contact /></div>}
            </div>
            <Footer/>
        </Container>
    );
}

export default App;

function AppNav(){

}