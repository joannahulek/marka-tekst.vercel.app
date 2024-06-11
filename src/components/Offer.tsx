import { ReactElement } from "react";

export type OfferItem = {
    id: string;
    label: string;
    headline: string;
    description: ReactElement;
}

export default function Offer() {
    return [copywritingSeo, contentCopywriting, webContent, descriptions, socialMedia, blogging]
}

const copywritingSeo: OfferItem = {
    id: 'copywriting-seo',
    label: 'Copywriting SEO',
    headline: 'Treści, które pomogą poprawić widoczność Twojej strony w Google',
    description: (<>
        <p>
            Treści, które publikujesz na stronie www, firmowym blogu, w swoim sklepie internetowym czy na
            portalach zewnętrznych, jako artykuły sponsorowane powinny przynosić Ci wymierne korzyści. Aby
            działały skutecznie i zachęcały użytkowników do przejścia na Twoją stronę internetową i skorzystania
            z oferty, muszą zostać przygotowane merytorycznie i zgodnie z zasadami SEO.
        </p>
        <p>
            Dobrze przygotowane teksty są bardzo ważne, aby budować silną pozycję Twojej strony w wyszukiwarce
            internetowej. Algorytmy Google oceniając stronę zwracają uwagę na szereg elementów, takich jak:
        </p>
        <ul>
            <li>merytoryka wpisów, muszą one być użyteczne dla użytkowników;</li>
            <li>odpowiednio dopasowane frazy kluczowe (liczy się nie tylko ich użycie, ale też naturalność
                korzystania, właściwe zagęszczenie itp.);
            </li>
            <li>odpowiednia struktura tekstu, podział na sekcje;</li>
            <li>unikatowość;</li>
        </ul>
        <p>
            Przygotowując treści dokładam wszelkich starań, aby spełniały one nie tylko wymagania Google, ale
            jednocześnie niosły ze sobą rzeczywistą wartość dla użytkownika.
            <br></br>
            Zależy Ci na wysokiej jakości treściach? Zapraszam do <a href="mailto:marta.kasprzyk5@gmail.com?&amp;subject=Kontakt%20ze%20strony&amp;body=Dzień%20dobry%20Pani%20Marto,%20"
                                                                     aria-label="mailto">KONTAKTU</a>.
        </p>
    </>)
}

const contentCopywriting: OfferItem = {
    id: 'content-copywriting',
    label: 'Content Copywriting',
    headline: 'Postaw na treści, które wspierają Twoją markę, dostarczając użytkownikowi wiedzę i pomagając rozwiązywać problemy',
    description: (<>
        <p>
            Usługa content copywritingu skupia się wokół treści, która mają prezentować wysoką wartość
            merytoryczną tekstów. Tworzone w ramach content marketingu wpisy są szczególnie istotne dla
            użytkowników, mają dostarczać odpowiedzi na pytania, mają edukować. Ich wartość w prowadzeniu
            biznesu jest nieoceniona. Przygotowywana w oparciu o zasady SEO treść wspiera działania zespołu
            marketingu, pomaga budować świadomość marki wśród konsumentów, pokazując Ciebie, jako eksperta w
            swojej dziedzinie.
        </p>
        <p>
            Doskonałej jakości content pomaga sprzedawać Twoje produkty i usługi. Wysoka jakość wpisów, takich
            jak artykuły czy poradniki wspiera Twoje działania biznesowe i dążenia do realizacji określonych
            celów.
        </p>
        <p>
            Marketing treści charakteryzuje się dużą funkcjonalnością. Treści pisane są prostym, zrozumiałym
            językiem, dopasowanym do Twojej grupy docelowej. Pomagają tworzyć spójny wizerunek firmy. Dodatkowo
            teksty angażują odbiorcę, budzą ciekawość, niosą odpowiedź na nurtujące pytania.
        </p>
    </>)
}

const webContent: OfferItem = {
    id: 'web-content',
    label: 'Treści na strony WWW',
    headline: 'Dobre treści pomagają budować dobre pierwsze wrażenie, pokazują, że jesteś Ekspertem w swojej dziedzinie',
    description: (<>
        <p>
            Odpowiednio przygotowana treść na stronie WWW może zachęcić lub zniechęcić Twoich potencjalnych
            klientów do skorzystania z usług. Dzięki mojej wiedzy i doświadczeniu mogę przygotować teksty, które
            zachęcą konsumentów do dalszej lektury, poznania Twoich produktów i usług, a jednocześnie - zostaną
            docenione przez algorytmy Google. Na etapie tworzenia treści na strony internetowe tak samo ważne
            jest zadbanie o potrzeby użytkowników, jak i najważniejsze elementy pozycjonowania.
        </p>
        <p>
            Łącząc wiedzę i doświadczenie w tworzeniu treści przygotuję skuteczny content, pomagający
            zaprezentować Twoją firmę w jak najlepszym świetle. Wyeksponowanie zalet, spójność, czytelność,
            wysoka merytoryka treści, które jednocześnie cechują się wysokim stopniem SEO-friendly to klucz do
            sukcesu.
        </p>
    </>)
}

const descriptions: OfferItem = {
    id: 'descriptions',
    label: 'Opisy kategorii, opisy produktów',
    headline:'Opisy produktów i kategorii w sklepie internetowym - użyteczne i funkcjonalne treści, które przyciągają uwagę Twoich klientów zachęcając do zakupów',
    description: (<>
        <p>
            Dobrze przygotowany, merytoryczny opis produktów i kategorii w sklepie internetowym to czynnik, który może zaważyć na finalizacji zakupu. Jeśli zostanie przygotowany tak, aby zaciekawić klienta, przynieść realną korzyść, wiedzę o użyteczności czy funkcjach, zaspokajając tym samym potrzeby, to szansa na skuteczną sprzedaż wzrasta. Dodatkowo opisy te powinny zostać przygotowane zgodnie z obowiązującymi zasadami SEO, co ważne jest w kontekście działania algorytmów wyszukiwarki.
        </p>
        <p>
            Przygotowując opisy produktów i kategorii dbam o to, aby były one napisane językiem korzyści, angażujące potencjalnego klienta, czytelne, dostarczające odpowiednią wiedzę merytoryczną. Tu liczą się nie tylko słowa, ale cała struktura tekstu, content i wygląd strony. Optymalizacja treści pod SEO pomaga realnie zwiększyć ruch na stronie, wspierając realizację Twoich celów biznesowych.
        </p>
    </>)
}

const socialMedia: OfferItem = {
    id: 'social-media',
    label: 'Social media',
    headline: 'Media społecznościowe - narzędzie wspierające Twój biznes',
    description: (<>
        <p>
            Znaczenie i popularność social mediów jest tak duża, że już od dawna przestały one być wykorzystywane wyłącznie do prywatnych celów. Ze względu na wciąż wzrastającą liczbę użytkowników mogą być z powodzeniem wykorzystywane, jako wsparcie dla realizacji Twoich celów. Ważne, aby działania te wpisywały się w strategię działania Twojej firmy oraz prowadzone były regularnie. Prowadząc działalność zajmowałam się prowadzeniem profili w mediach społecznościowych (przede wszystkim na platformie Facebook), doborem treści spójnych z celami firmy, budując wizerunek eksperta, dla którego komunikacja z klientem jest podstawą kultury prowadzenia biznesu.
        </p>
    </>)
}

const blogging: OfferItem = {
    id: 'blogging',
    label: 'Prowadzenie bloga',
    headline: 'tbd...',
    description: (<>
        <p>
            kompleksowe, wraz z optymalizacją pod SEO w WP - opisy meta, zajawki, zdjęcia z darmowego stocka, tagi, propozycja tematów wpisów
        </p>
    </>)
}