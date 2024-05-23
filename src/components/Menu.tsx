import Portfolio from "./Portfolio";

export default function Menu(){
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="true" href="#marka">MarKa Tekst</a>
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
                        <a className="nav-link" href="#contact">Kontakt</a>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <div id="portfolio">{Portfolio()}</div>
            </div>
        </div>
    )
}