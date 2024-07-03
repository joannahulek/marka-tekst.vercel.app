import React from "react";
import { useNav } from "./helpers/NavContext";

export default function Menu() {
    const { activeTab, setActiveTab } = useNav();

    const handleSelect = (selectedTab: string) => {
        setActiveTab(selectedTab);
    };

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-white">
            <div className="container container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="nav nav-tabs navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item visually-hidden">
                            <a className="nav-link" href="#marka"
                               onClick={() => handleSelect('#marka')}>Strona Główna</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === '#about' ? 'active' : ''}`} aria-current="page" href="#about"
                               onClick={() => handleSelect('#about')}>O mnie</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === '#copywriting' ? 'active' : ''}`} href="#copywriting"
                               onClick={() => handleSelect('#copywriting')}>Copywriting</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === '#portfolio' ? 'active' : ''}`} href="#portfolio"
                               onClick={() => handleSelect('#portfolio')}>Portfolio</a>
                        </li>
                        <li className="nav-item visually-hidden">
                            <a className="nav-link disabled"
                               href="https://www.linkedin.com/in/marta-kasprzyk-648540150/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${activeTab === '#contact' ? 'active' : ''}`} href="#contact"
                               onClick={() => handleSelect('#contact')}>Kontakt</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="tel:+48514720958"
                               aria-disabled="true">tel:+48514720958</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
