import { useEffect } from "react"

export default function ParallaxComponent() {
    useEffect(() => {
        function parallax() {
            const Parallax = require('../../assets/vendor/parallax-js/dist/parallax.min.js')
            for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++) new Parallax(e[t])
        }
        parallax()
    }, [])
    return (
        <>
            <div className="parallax">
                <div className="parallax-layer" data-depth="0.1"><img src="img/demo/personal-portfolio/socials/figure-1.png" alt="Layer 1" /></div>
                <div className="parallax-layer" data-depth="0.15"><img src="img/demo/personal-portfolio/socials/figure-2.png" alt="Layer 2" /></div>
                <div className="parallax-layer" data-depth="0.25"><img src="img/demo/personal-portfolio/socials/figure-3.png" alt="Layer 3" /></div>
            </div>
        </>
    )
}