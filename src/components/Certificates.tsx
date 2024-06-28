import content_marketing_1 from "./images/certificates/akademia_parp/content_marketing/1.png"
import marketing_internetowy_1 from "./images/certificates/akademia_parp/marketing_internetowy/1.png"
import social_media_zaw_1 from "./images/certificates/akademia_parp/social_media_zaw/1.png"
import social_media_w_biznesie_1 from "./images/certificates/akademia_parp/social_media_w_biznesie/1.png"


export default function Certificates(){
    return(
        <>
            <h2>Certyfikaty</h2>

            <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="col">
                        <a href="https://drive.google.com/file/d/1ZWZ2bZj5OiuB9s6mhoqtrHaxgF2WG8hI/view?usp=drive_link">
                            <img src={content_marketing_1} className="img-fluid" alt="Content marketing w biznesie, Polska Agencja Rozwoju Przedsiębiorczości - parp.gov.pl"/>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://drive.google.com/file/d/1HmbxGVSWGrNyPu1QhxUIdZO8uwYZG7N-/view?usp=drive_link">
                            <img src={marketing_internetowy_1} className="img-fluid"
                                 alt="Marketing internetowy – kurs zaawansowany I stopnia, Polska Agencja Rozwoju Przedsiębiorczości - parp.gov.pl"/>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://drive.google.com/file/d/1OVNqm48S0ksE7Q9b2TaboZLWZgVr21r8/view?usp=drive_link">
                            <img src={social_media_zaw_1} className="img-fluid"
                                 alt="Media społecznościowe – kurs zaawansowany, Polska Agencja Rozwoju Przedsiębiorczości - parp.gov.pl"/>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://drive.google.com/file/d/1uJQ1WNeHnSG9bdtIJQGNcieMIToQ-phh/view?usp=drive_link">
                            <img src={social_media_w_biznesie_1} className="img-fluid"
                                 alt="Media społecznościowe w biznesie, Polska Agencja Rozwoju Przedsiębiorczości - parp.gov.pl"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
