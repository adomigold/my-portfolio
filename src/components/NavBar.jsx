import HireMeBtn from "./HireMeBtn";
import HireMe from "./HireMeForm";
import ToggleBtn from "./MobileMenu";
import NavTabs from "./NavTabs";
import ToggleClose from "./ToggleClose";

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
                        <HireMe />
                    </div>
                </div>
            </div>
            <header className="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky">
                <div className="navbar-search bg-light">
                    <ToggleClose />
                </div>
                <div className="container px-0 px-xl-3">
                    <ToggleBtn />
                    <HireMeBtn />
                    <NavTabs />
                </div>
            </header>
        </>
    )
}