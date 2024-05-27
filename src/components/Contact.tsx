export default function Contact(){
    return(
        <>
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

        </>
    )
}