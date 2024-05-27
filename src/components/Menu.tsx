import React, { useState, useEffect } from 'react';
import { Card, Nav, Button, Collapse } from 'react-bootstrap';
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const CardWithTabs: React.FC = () => {

    // RVA Hamburger menu
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // active tab
    const [activeTab, setActiveTab] = useState('#marka');
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setActiveTab(hash);
        }
    }, []);

    const handleSelect = (selectedTab: string) => {
        setActiveTab(selectedTab);
        window.location.hash = selectedTab;
        if (isMobile) {
            setMenuOpen(false);  // Close the menu after selecting a tab in the mobile version
        }
    };

    return (
        <Card>
            <Card.Header>
                {isMobile ? (
                    <>
                        <div onClick={() => setMenuOpen(!menuOpen)} aria-controls="collapse-menu"
                                aria-expanded={menuOpen}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                 fill="#5f6368">
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                            </svg>
                        </div>
                        <Collapse in={menuOpen}>
                            <Nav id="collapse-menu" className="flex-column">
                                <Nav.Link href="#marka" onClick={() => handleSelect('#marka')}>MarKa Tekst</Nav.Link>
                                <Nav.Link href="#about" onClick={() => handleSelect('#about')}>O mnie</Nav.Link>
                                <Nav.Link href="#copywriting" onClick={() => handleSelect('#copywriting')}>Copywriting</Nav.Link>
                                <Nav.Link href="#portfolio" onClick={() => handleSelect('#portfolio')}>Portfolio</Nav.Link>
                                <Nav.Link href="#contact" onClick={() => handleSelect('#contact')}>Kontakt</Nav.Link>
                            </Nav>
                        </Collapse>
                    </>
                ) : (
                    <Nav variant="tabs" activeKey={activeTab}>
                        <Nav.Item>
                            <Nav.Link href="#marka" onClick={() => handleSelect('#marka')}>MarKa Tekst</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about" onClick={() => handleSelect('#about')}>O mnie</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#copywriting" onClick={() => handleSelect('#copywriting')}>Copywriting</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#portfolio" onClick={() => handleSelect('#portfolio')}>Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" onClick={() => handleSelect('#contact')}>Kontakt</Nav.Link>
                        </Nav.Item>
                    </Nav>
                )}
            </Card.Header>
            <Card.Body>
                {activeTab === '#marka' && <div>Treść dla MarKa Tekst</div>}
                {activeTab === '#about' && <div>Treść dla O mnie</div>}
                {activeTab === '#copywriting' && <div>Treść dla Copywriting</div>}
                {activeTab === '#portfolio' && <div>Treść dla Portfolio {Portfolio()}</div>}
                {activeTab === '#contact' && <div>Treść dla Kontakt {Contact()}</div>}
            </Card.Body>
        </Card>
    );
}

export default CardWithTabs;
