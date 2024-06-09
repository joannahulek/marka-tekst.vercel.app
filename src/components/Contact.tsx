interface Props{
    company:string []
    mail:string [][]
    phone:string [][]
    linkedin:string []
    address:string[]
    ceidg:string[]
}
export default function Contact(){
    return(
        <>
            <h1>Marka Tekst Marta Kasprzyk</h1>
            <div>
                <p>
                    <a
                        href="mailto:marta.kasprzyk5@gmail.com?&amp;subject=Kontakt%20ze%20strony&amp;body=Dzień%20dobry%20Pani%20Marto,%20"
                        aria-label="mailto" className="text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" height="64px" width="64px" viewBox="0 -960 960 960"
                             fill="currentColor">
                            <path
                                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                        </svg>
                        &emsp;
                        marta.kasprzyk5@gmail.com
                    </a>
                </p>
                <p>
                    <a href="tel:+48514720958" aria-label="phone" className="text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px"
                             fill="currentColor">
                            <path
                                d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                        </svg>
                        &emsp;
                        +48 514 720 958
                    </a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/marta-kasprzyk-648540150/" target="_blank"
                       rel="noopener noreferrer" className="text-decoration-none">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"
                             className="linkedin-icon" height="64px" width="64px"/>
                        &emsp;
                        LinkedIn
                    </a>
                </p>
            </div>
        </>
    )
}

function contactForm() {
    return (<>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1"
                   placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInputTitle" className="form-label">Tytuł</label>
            <input type="text" className="form-control" id="exampleFormControlInputTitle"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Treść</label>
            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
        </div>
        <button type="submit" className="btn btn-light">Wyślij</button>
    </>);
}