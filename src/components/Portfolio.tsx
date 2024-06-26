import getSamples, {SampleItem} from "./content/PortfolioContent";

export default function Portfolio() {
    const samples = getSamples()
    return (
        <>
            <div className="accordion" id="accordionExample">
                {samples.map((sample) => (
                    <>
                        {sample.collapsed ? collapsedSample(sample) : nonCollapsedSample(sample)}
                    </>
                ))}
            </div>
        </>
    )
}

function nonCollapsedSample(sample: SampleItem) {
    return <div className="accordion-item">
        <div className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target={"#collapse" + sample.id} aria-expanded="true"
                    aria-controls={"collapse" + sample.id}>
                <h3>{sample.label}</h3>
            </button>
        </div>
        <div id={"collapse"+sample.id} className="accordion-collapse collapse show"
             data-bs-parent="#accordionExample">
            <div className="accordion-body">
                {sample.description}
            </div>
        </div>
    </div>;
}

function collapsedSample(sample: SampleItem) {
    return <div className="accordion-item">
        <div className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={"#collapse"+sample.id} aria-expanded="false" aria-controls={"collapse"+sample.id}>
                <h3>{sample.label}</h3>
            </button>
        </div>
        <div id={"collapse"+sample.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                {sample.description}
            </div>
        </div>
    </div>;
}