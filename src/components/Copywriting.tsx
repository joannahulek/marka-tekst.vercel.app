import Offer, {OfferItem} from "./Offer";

export default function Copywriting() {
    const items: OfferItem[] = Offer()

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {items.map((item: OfferItem) => (
                    <div className="col">
                        <div className="card h-100">
                            <a href={item.id} className="text-decoration-none">
                                <div className="card-body">
                                    <h5 className="card-title text-uppercase">{item.label}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.headline}</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {items.map((item: OfferItem) => (
                <div id={item.id}>
                    <h2>{item.label}</h2>
                    {item.description}
                </div>
                ))}
        </>
    )
}