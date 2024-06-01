export default function Portfolio() {
return (
    <>
        <h2>
            Przykładowy opis akordeonu
        </h2>

        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the
                        collapse
                        plugin adds the appropriate classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                        this with custom CSS or overriding our default variables. It's also worth noting that just about
                        any
                        HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        <br></br>
                        <a href="#" target="_blank">Link</a>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the
                        collapse plugin adds the appropriate classes that we use to style each element. These classes
                        control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our default variables. It's also worth noting
                        that
                        just about any HTML can go within the <code>.accordion-body</code>, though the transition does
                        limit
                        overflow.
                        <a href="#" target="_blank">Link</a>
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
                        collapse plugin adds the appropriate classes that we use to style each element. These classes
                        control the overall appearance, as well as the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our default variables. It's also worth noting
                        that
                        just about any HTML can go within the <code>.accordion-body</code>, though the transition does
                        limit
                        overflow.
                    </div>
                </div>
            </div>
        </div>

        <br></br>

        <h2>Przykładowy opis produktu</h2>

        <div className="card h-100">
            <div className="row">
                <div className="col-4">
                    <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                        <nav className="nav nav-pills flex-column">
                            <a className="nav-link" href="#item-1">Item 1</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                                <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                            </nav>
                            <a className="nav-link" href="#item-2">Item 2</a>
                            <a className="nav-link" href="#item-3">Item 3</a>
                            <nav className="nav nav-pills flex-column">
                                <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                                <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                            </nav>
                        </nav>
                    </nav>
                </div>

                <div className="col-8">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true"
                         className="scrollspy-example-2" tabIndex={-1}>
                        <div id="item-1">
                            <h4>Item 1</h4>
                            <p>...</p>
                        </div>
                        <div id="item-1-1">
                            <h5>Item 1-1</h5>
                            <p>...</p>
                        </div>
                        <div id="item-1-2">
                            <h5>Item 1-2</h5>
                            <p>...</p>
                        </div>
                        <div id="item-2">
                            <h4>Item 2</h4>
                            <p>...</p>
                        </div>
                        <div id="item-3">
                            <h4>Item 3</h4>
                            <p>...</p>
                        </div>
                        <div id="item-3-1">
                            <h5>Item 3-1</h5>
                            <p>...</p>
                        </div>
                        <div id="item-3-2">
                            <h5>Item 3-2</h5>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
)
}