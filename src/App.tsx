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
import Alert from "./components/Alert";


const App: React.FC = () => {

    const [menuHTML, activeTab] = Menu();

    return (
        <Container>
            {menuHTML}
            <Hero/>
            <div className="container">
                {activeTab === '#marka' && <div id="marka"><MarKa/></div>}
                {activeTab === '#about' && <div id="about"><About/></div>}
                {activeTab === ('#copywriting') && <div id="copywriting"><Copywriting/></div>}
                {activeTab === '#portfolio' && <div id="portfolio"><Portfolio/></div>}
                {activeTab === '#contact' && <div id="contact"><Contact/></div>}
            </div>
            <Footer/>
            <Alert/>
        </Container>
    );
}

export default App;
