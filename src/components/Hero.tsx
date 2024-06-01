import {Button} from "react-bootstrap";

export default function Hero(){
    return (
        <div className="px-4 py-2 my-2 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis">MarKa Tekst</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Dbam o Twoją markę w sieci</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-end">
                        <button type="button" className="btn btn-outline-primary btn-lg px-4 gap-3">Call to action</button>
                    </div>
                </div>
        </div>
    )
}