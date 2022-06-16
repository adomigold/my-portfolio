export default function NavTabs() {
    return (
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
    )
}