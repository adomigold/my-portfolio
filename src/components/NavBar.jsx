export default function NavBar() {
    return (
        <>
            <div className="modal fade" id="modal-contact" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header mb-1">
                            <h4 className="modal-title">What project are you looking for?</h4>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className="modal-body needs-validation py-4" noValidate>
                            <div className="btn-group mb-3">
                                <div className="me-2 mb-2">
                                    <input className="btn-check" type="radio" name="services" id="mobileapp" autoComplete="off" checked readOnly />
                                    <label className="btn btn-outline-primary" htmlFor="mobileapp">Mobile App</label>
                                </div>
                                <div className="me-2 mb-2">
                                    <input className="btn-check" type="radio" name="services" id="webapp" autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor="webapp">Web App</label>
                                </div>
                                <div className="me-2 mb-2">
                                    <input className="btn-check" type="radio" name="services" id="branding" autoComplete="off" />
                                    <label className="btn btn-outline-primary" htmlFor="branding">Static Website</label>
                                </div>
                            </div>
                            <div className="input-group mb-3"><i className="ai-user position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                <input className="form-control rounded" type="text" placeholder="Name" required />
                            </div>
                            <div className="input-group mb-3"><i className="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                <input className="form-control rounded" type="email" placeholder="Email" required />
                            </div>
                            <div className="mb-3 pb-1">
                                <textarea className="form-control" rows="4" placeholder="Project description" required></textarea>
                            </div>
                            <div className="row py-2">
                                <div className="col-lg-6 col-md-8">
                                    <button className="btn btn-primary d-block w-100" type="submit">Send Request</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <header className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
                <div className="navbar-search bg-light">
                    <div className="container d-flex flex-nowrap align-items-center"><i className="ai-search fs-xl"></i>
                        <input className="form-control form-control-xl navbar-search-field" type="text" placeholder="Search site" />
                        <div className="d-flex align-items-center"><span className="text-muted fs-xs mt-1 d-none d-sm-inline">Close</span>
                            <button className="btn-close p-2" type="button" data-bs-toggle="search"></button>
                        </div>
                    </div>
                </div>
                <div className="container px-0 px-xl-3">
                    <button className="navbar-toggler ms-n2 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2" href="index.html">
                        <img className="d-none d-lg-block" src="img/logo/logo.png" alt="Around" width="58" />
                        <img className="d-lg-none" src="img/logo/logo.png" alt="Around" width="58" />
                    </a>
                    <div className="d-flex align-items-center order-lg-3 ms-lg-auto"><a className="btn btn-primary d-lg-inline-block d-none" href="#modal-contact" data-bs-toggle="modal">Hire me</a><a className="btn btn-sm btn-primary d-lg-none d-inline-block" href="#modal-contact" data-bs-toggle="modal">Hire me</a></div>
                    <div className="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
                        <div className="offcanvas-header navbar-shadow">
                            <h5 className="mt-1 mb-0">Menu</h5>
                            <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown dropdown-mega active">
                                    <a className="nav-link" href="#whoami">Who Am I</a>
                                </li>
                                <li className="nav-item dropdown dropdown-mega">
                                    <a className="nav-link" href="#myskills">My Skills</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#socialmedias">Social Medias</a>
                                </li>
                            </ul>
                        </div>
                        <div className="offcanvas-footer"><a className="btn d-block w-100 btn-primary" href="#modal-contact" data-bs-toggle="modal">Hire me</a></div>
                    </div>
                </div>
            </header>
        </>
    )
}