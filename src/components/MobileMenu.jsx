export default function ToggleBtn() {
    return (
        <>
            <button className="navbar-toggler ms-n2 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2" href="index.html">
                <img className="d-none d-lg-block" src="img/logo/logo.png" alt="Around" width="58" />
                <img className="d-lg-none" src="img/logo/logo.png" alt="Around" width="58" />
            </a>
        </>
    )
}