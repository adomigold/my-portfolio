export default function ToggleClose() {
    return (
        <div className="container d-flex flex-nowrap align-items-center"><i className="ai-search fs-xl"></i>
            <input className="form-control form-control-xl navbar-search-field" type="text" placeholder="Search site" />
            <div className="d-flex align-items-center"><span className="text-muted fs-xs mt-1 d-none d-sm-inline">Close</span>
                <button className="btn-close p-2" type="button" data-bs-toggle="search"></button>
            </div>
        </div>
    )
}