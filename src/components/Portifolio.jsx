import PortfolioGrid from './PortifolioGrid'
import PortfolioNav from './PortifolioNav'

export default function Portfolio({portfolio}) {
    return (
        <section className="overflow-hidden" id="portfolio">
            <div className="container py-lg-7 py-md-6 py-5 my-2 my-md-0">
                <h2 className="mb-3 text-center">My portfolio</h2>
                <p className="mb-4 pb-md-2 text-muted text-center">Most recent projects I have completed</p>
                <div className="masonry-filterable">
                    <PortfolioNav />
                    <PortfolioGrid portfolio={portfolio}/>
                </div>
            </div>
        </section>
    )
}