import {Certificate} from "node:crypto";
import Certificates from "./Certificates";

export default function About() {
    return (
        <>
            <h1>O mnie</h1>
            <p>
                Copywritingiem zajmuje się od 2017 r. Przez ten czas stale rozwijam swój warsztat, aby przygotowywane treści były przynosiły realną korzyść dla Twojego biznesu. Teksty są przyjazne dla użytkownika, a jednocześnie zoptymalizowane pod kątem wymagań SEO, co naturalnie wspiera proces pozycjonowania strony internetowej.
            </p>
            <p>
                Specjalizuję się w tworzeniu treści, takich jak:
                <ul>
                    <li>content marketing (tj. artykuły eksperckie, wpisy na blogi, poradniki)</li>
                    <li>opisy produktów</li>
                    <li>opisy kategorii</li>
                    <li>artykuły sponsorowane</li>
                    <li>treści na strony www</li>
                </ul>
                Wspomagam także prowadzenie profili firmowych na FB.
            </p>
            <p>
                Cenię sobie wiedzę, dlatego stale się rozwijam poszerzając swoje umiejętności w zakresie tematów związanych z SEO czy pozycjonowaniem lokalnym. Wiedza ta sprawia, że przygotowywane teksty doskonale wspierają i uzupełniają Twoje cele biznesowe.
            </p>
            <p>
                W ostatnim czasie wiele czasu i uwagi poświęcam na naukę UX/UI.
            </p>

            <Certificates/>

        </>
    )
}