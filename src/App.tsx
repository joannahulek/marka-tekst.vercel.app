import React from "react";
import { Container } from 'react-bootstrap';
import {NavProvider, useNav} from "./components/helpers/NavContext";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Copywriting from "./components/Copywriting";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import contactData from "./components/content/contactData.json"
const App: React.FC = () => {
    return (
        <NavProvider>
            <Container>
                <Menu />
                <Hero />
                <MainContent />
                <Footer />
            </Container>
        </NavProvider>
    );
};

const MainContent: React.FC = () => {
    const { activeTab } = useNav();

    return (
        <div className="container">
            {activeTab === '#about' && <div className="web-content" id="about"><About /></div>}
            {(activeTab === '#copywriting' ||
                activeTab === '#copywriting-seo' ||
                activeTab === '#content-copywriting' ||
                activeTab === '#web-content' ||
                activeTab === '#descriptions' ||
                activeTab === '#social-media' ||
                activeTab === '#blogging') && <div className="web-content" id="copywriting"><Copywriting /></div>}
            {activeTab === '#portfolio' && <div className="web-content" id="portfolio"><Portfolio /></div>}
            {activeTab === '#contact' && <div className="web-content" id="contact"><Contact /></div>}
        </div>
    );
};

export default App;