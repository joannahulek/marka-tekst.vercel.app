export default function Menu(){
    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#marka">MarKa Tekst</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#marka">Strona Główna</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">O mnie</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#copywriting">Copywriting</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           href="https://www.linkedin.com/in/marta-kasprzyk-648540150/">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Kontakt</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="tel:+48123456789"
                           aria-disabled="true">tel:+48123456789</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}