import React, {useState} from "react";
import content_marketing_1 from "./images/certificates/akademia_parp/content_marketing/1.png";
import content_marketing_2 from "./images/certificates/akademia_parp/content_marketing/2.png";
import marketing_internetowy_1 from "./images/certificates/akademia_parp/marketing_internetowy/1.png";
import marketing_internetowy_2 from "./images/certificates/akademia_parp/marketing_internetowy/2.png";
import social_media_zaw_1 from "./images/certificates/akademia_parp/social_media_zaw/1.png";
import social_media_zaw_2 from "./images/certificates/akademia_parp/social_media_zaw/2.png";
import social_media_w_biznesie_1 from "./images/certificates/akademia_parp/social_media_w_biznesie/1.png";
import social_media_w_biznesie_2 from "./images/certificates/akademia_parp/social_media_w_biznesie/2.png";

interface Certificate {
    url:string
    img1:string
    img2:string
    alt:string
}

const myCertificates: Certificate[] = [
    {
        url:"https://drive.google.com/file/d/1ZWZ2bZj5OiuB9s6mhoqtrHaxgF2WG8hI/view?usp=drive_link",
        img1:content_marketing_1,
        img2:content_marketing_2,
        alt:"Content marketing w biznesie, Polska Agencja Rozwoju Przedsiębiorczości - parp.gov.pl"
    },
    {
        url:"https://drive.google.com/file/d/1HmbxGVSWGrNyPu1QhxUIdZO8uwYZG7N-/view?usp=drive_link",
        img1:marketing_internetowy_1,
        img2:marketing_internetowy_2,
        alt:"Marketing internetowy – kurs zaawansowany I stopnia, Polska Agencja Rozwoju Przedsiębiorczości - parp.gov.pl"
    },
    {
        url:"https://drive.google.com/file/d/1OVNqm48S0ksE7Q9b2TaboZLWZgVr21r8/view?usp=drive_link",
        img1:social_media_zaw_1,
        img2:social_media_zaw_2,
        alt:"Media społecznościowe – kurs zaawansowany, Polska Agencja Rozwoju Przedsiębiorczości - parp.gov.pl"
    },
    {
        url:"https://drive.google.com/file/d/1uJQ1WNeHnSG9bdtIJQGNcieMIToQ-phh/view?usp=drive_link",
        img1:social_media_w_biznesie_1,
        img2:social_media_w_biznesie_2,
        alt:"Media społecznościowe w biznesie, Polska Agencja Rozwoju Przedsiębiorczości - parp.gov.pl"
    }
    ];

export default function Certificates(){
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return(
        <>
            <h2>Certyfikaty</h2>

            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    {myCertificates.map((certificate, index) => (
                        <div className="col">
                            <a href={certificate.url} target="_blank">
                                <img
                                    src={hoveredIndex === index ? certificate.img2 : certificate.img1}
                                    className="img-fluid lazy"
                                    alt={certificate.alt}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}