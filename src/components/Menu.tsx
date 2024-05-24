import React, { useState, useEffect } from 'react';
import { Card, Nav } from 'react-bootstrap';
import Portfolio from "./Portfolio";

const CardWithTabs: React.FC = () => {
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
    };

    return (
        <Card>
            <Card.Header>
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
            </Card.Header>
            <Card.Body>
                {activeTab === '#marka' && <div>Treść dla MarKa Tekst</div>}
                {activeTab === '#about' && <div>Treść dla O mnie</div>}
                {activeTab === '#copywriting' && <div>Treść dla Copywriting</div>}
                {activeTab === '#portfolio' && <div>Treść dla Portfolio {Portfolio()}</div>}
                {activeTab === '#contact' && <div>Treść dla Kontakt</div>}
            </Card.Body>
        </Card>
    );
}

export default CardWithTabs;
