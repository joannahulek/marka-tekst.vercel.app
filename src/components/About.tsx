import {Certificate} from "node:crypto";
import Certificates from "./Certificates";

export default function About() {
    return (
        <>
            <h2>O mnie</h2>
            <p>
                Jestem copywriterem z ponad 10-letnim doświadczeniem, specjalizującym się w tworzeniu treści
                zoptymalizowanych pod kątem wyszukiwarek internetowych, szczególnie Google. Tworzę zarówno krótsze, jak
                i dłuższe formy pisemne na zamówienie. Współpracuję z międzynarodowymi markami, takimi jak Decathlon i
                Medicover, agencjami marketingowymi, małymi i średnimi przedsiębiorstwami oraz klientami indywidualnymi.
                Przygotowuję profesjonalne posty do mediów społecznościowych, dostosowane do celów marketingowych firmy
                oraz optymalizowane pod kątem słów kluczowych i tagów.
            </p>
            <p>
                Jednocześnie rozwijam swoje umiejętności w zakresie UX/UI Design.
            </p>

            <Certificates/>

        </>
    )
}