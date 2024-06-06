import { ReactElement } from "react";

export type SampleItem = {
    id: number
    label: string;
    collapsed: boolean;
    description: ReactElement
}

const prodSample1: SampleItem ={
    id: 0,
    label: "Przykładowy opis produktu",
    collapsed: true,
    description:(<>
        <h4>Maxi Cosi CabrioFix i-size</h4>
        <p>
            Maxi Cosi CabrioFix i-size to fotelik początkowy, dedykowany dla noworodków i niemowląt o wadze do 12 kg i
            wzroście od 40 cm do 75 cm. Fotelik montowany tyłem do kierunku jazdy przy pomocy wygodnej i stabilnej bazy
            ISOFIX lub przy pomocy samochodowych pasów bezpieczeństwa. CabrioFix i-size to komfort i bezpieczeństwo
            Twojego dziecka.
        </p>
        <p>
            Maxi Cosi to marka pochodząca z Holandii, która specjalizuje się w produkcji samochodowych fotelików
            dziecięcych oraz wózków. Producent dba o bezpieczeństwo dzieci nieprzerwanie od 1984 r., stale ulepszając
            swoje produkty, aby każda podróż była bezpieczna i komfortowa.
        </p>
        <h4>Maxi Cosi CabrioFix i-sizeMaxi Cosi CabrioFix i-Size -- inwestycja w bezpieczeństwo Twojego dziecka</h4>
        <p>
            Fotelik RWF Maxi Cosi CabrioFix i-Size to model należący do klasy wagowej 0-12 kg, tj. 0+. Jest on wyposażony w funkcjonalną wkładkę niemowlęcą, pozwalającą na bezpieczne przewożenie noworodków.
        </p>
        <p>
            Norma i-Size, to funkcjonujący od 2013 r. system homologacji, oceniający bezpieczeństwo dziecka przewożonego w foteliku. Spełnienie restrykcyjnych, ujednoliconych wymagań sprawia, że produkt uznawany jest za bezpieczny, na dowód czego uzyskuje specjalny certyfikat. Modele fotelików z certyfikatem i-Size sprawdzane są m.in. pod kątem bezpieczeństwa Malucha w czasie kolizji bocznych. Dodatkowo jeszcze lepiej chronią głowę i szyję dziecka.
        </p>
    </>)

}

const samples: SampleItem[] = [prodSample1, prodSample1]

export default function Portfolio() {
    return (
        <>
        <h2>
            Przykładowy opis akordeonu
        </h2>

        <div className="accordion" id="accordionExample">
            {samples.map((sample) => (
                <div className="accordion-item">
                    <div className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h3>{sample.label}</h3>
                        </button>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {sample.description}
                        </div>
                    </div>
                </div>
            ))}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                        collapse plugin adds the appropriate classes that we use to style each element. These
                        classes
                        control the overall appearance, as well as the showing and hiding via CSS transitions. You
                        can
                        modify any of this with custom CSS or overriding our default variables. It's also worth
                        noting
                        that
                        just about any HTML can go within the <code>.accordion-body</code>, though the transition
                        does
                        limit
                        overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the
                        collapse plugin adds the appropriate classes that we use to style each element. These
                        classes
                        control the overall appearance, as well as the showing and hiding via CSS transitions. You
                        can
                        modify any of this with custom CSS or overriding our default variables. It's also worth
                        noting
                        that
                        just about any HTML can go within the <code>.accordion-body</code>, though the transition
                        does
                        limit
                        overflow.
                    </div>
                </div>
            </div>
        </div>


</>
)
}