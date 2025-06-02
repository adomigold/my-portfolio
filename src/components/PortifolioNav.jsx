export default function PortfolioNav() {
    return (
        <nav className="pb-3 mb-4" data-simplebar data-simplebar-auto-hide="false">
            <ul className="masonry-filters nav nav-tabs justify-content-sm-center flex-nowrap text-nowrap mb-0">
                <li className="nav-item"><a className="nav-link active" href="#" data-group="all">All</a></li>
                <li className="nav-item"><a className="nav-link" href="#" data-group="mobile-app">Mobile App</a></li>
                <li className="nav-item"><a className="nav-link" href="#" data-group="full-stack">Full Stack</a></li>
                <li className="nav-item"><a className="nav-link" href="#" data-group="front-end">Front End</a></li>
            </ul>
        </nav>
    )
}