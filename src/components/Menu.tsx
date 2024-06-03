import React, {useState, useEffect} from "react";
export default function Menu(){

    const [activeTab, setActiveTab] = useState('#marka');

    const handleSelect = (selectedTab: string) => {
        setActiveTab(selectedTab);
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setActiveTab(hash);
        }
    }, []);

    return [(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="nav nav-tabs navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#marka"
                               onClick={() => handleSelect('#marka')}>Strona Główna</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about"
                               onClick={() => handleSelect('#about')}>O mnie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#copywriting"
                               onClick={() => handleSelect('#copywriting')}>Copywriting</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio"
                               onClick={() => handleSelect('#portfolio')}>Portfolio</a>
                        </li>
                        <li className="nav-item visually-hidden">
                            <a className="nav-link disabled"
                               href="https://www.linkedin.com/in/marta-kasprzyk-648540150/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact"
                               onClick={() => handleSelect('#contact')}>Kontakt</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="tel:+48123456789"
                               aria-disabled="true">tel:+48123456789</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ), activeTab]
}