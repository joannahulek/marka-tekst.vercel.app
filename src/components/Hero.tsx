import heroImage from "./images/Pablo_Stanley-lummi.ai.png"

export default function Hero(){
    return (
        <div className="hero text-center">
            <div className="row align-items-center rounded-3 border shadow-sm">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">MarKa Tekst</h1>
                    <p className="lead text-center">Dbam o Twoją markę w sieci</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-end mb-4 mb-lg-3">
                        <a href="https://marka-tekst.vercel.app/#copywriting"><button type="button" className="btn btn-outline-secondary btn-lg px-4">Moja oferta</button></a>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-sm">
                    <img className="d-block mx-lg-auto img-fluid" src={heroImage} alt="Pablo Stanley, lummi.ai" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}