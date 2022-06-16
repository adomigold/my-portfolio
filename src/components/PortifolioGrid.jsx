import { useEffect } from "react"
import Shuffle from 'shufflejs'
import imagesLoaded from 'imagesloaded'

export default function PortfolioGrid({ portfolio }) {
    useEffect(() => {
        function shuffleCards() {
            var n, o = document.querySelectorAll(".masonry-grid");

            if (null !== o)
                for (var e = 0; e < o.length; e++) {
                    var t = function (e) {
                        n = new Shuffle(o[e], { itemSelector: ".masonry-grid-item", sizer: ".masonry-grid-item" }), imagesLoaded(o[e]).on("progress", function () { n.layout() });
                        var a = o[e].closest(".masonry-filterable");
                        if (null === a) return { v: void 0 };
                        for (var t = a.querySelectorAll(".masonry-filters [data-group]"), r = 0; r < t.length; r++) t[r].addEventListener("click", function (e) {
                            var t = a.querySelector(".masonry-filters .active"),
                                r = this.dataset.group;
                            null !== t && t.classList.remove("active"), this.classList.add("active"), n.filter(r), e.preventDefault()
                        })
                    }(e);
                }
        }
        shuffleCards()
    })
    return (
        <div className="masonry-grid" data-columns="3">
            {/* <!-- Portfolio item--> */}
            {portfolio.data.map(p => (
                <article key={p.title} className="masonry-grid-item" data-groups={`["${p.type}"]`}>
                    <a className="card card-hover h-100 border-0 shadow" target="_blank" rel="noreferrer" href={p.url}>
                        <img className="card-img-top" src={p.image} alt="Article image" />
                        <div className="card-body text-center">
                            <h3 className="h5 mb-1">{p.title}</h3><span className="fs-sm text-muted">{p.type.charAt(0).toUpperCase() + p.type.slice(1)}</span>
                        </div>
                    </a>
                </article>
            ))}
        </div>
    )
}