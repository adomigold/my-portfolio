import Image from 'next/image'
import Style from '../../assets/styles/page-loader.module.css'
import React, { useEffect } from 'react'
import Shuffle from 'shufflejs'
import imagesLoaded from 'imagesloaded'
import NavBar from '../components/NavBar'


export default function Home() {
    useEffect(() => {
        function Preload() {
            window.onload = function () {
                var preloader = document.querySelector(`.${Style.pageLoading}`);
                preloader.classList.remove('active');
                setTimeout(function () {
                    preloader.remove();
                }, 2000);
            };
        };

        Preload()

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

        function parallax() {
            const Parallax = require('../../assets/vendor/parallax-js/dist/parallax.min.js')
            for (var e = document.querySelectorAll(".parallax"), t = 0; t < e.length; t++) new Parallax(e[t])
        }

        shuffleCards()
        parallax()
    }, [])
    return (
        <>
            <div className={`${Style.pageLoading} active`}>
                <div className={Style.pageLoadingInner}>
                    <div className={Style.pageSpinner}></div><span>Loading...</span>
                </div>
            </div>
            <main className="page-wrapper">
                <NavBar />
                <section id="whoami" className="container mb-3 my-md-0 py-5 py-md-6">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-5 order-md-1 order-2 text-md-start text-center">
                            <h1 className="display-4 mb-lg-4 mb-3">Hey, I’m Adolph</h1>
                            <h2 className="mb-lg-5 mb-4 text-muted">Web Application &amp; Mobile Application Developer</h2>
                            <div className="text-nowrap">
                                <a className="btn btn-translucent-primary me-3" href="docs/Adolph's Resume.pdf">
                                    <i className="ai-arrow-down-circle mt-n1 me-2"></i>Download CV
                                </a>
                                <a className="btn btn-outline-primary" href="#portfolio" data-scroll>Portfolio
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 order-md-2 order-1 mb-md-0 mb-grid-gutter">
                            <Image src="/img/account/me.svg" alt="Illustration" width={'810px'} height={'634px'} />
                        </div>
                    </div>
                </section>
                {/* <!-- Services--> */}
                <section id="myskills" className="bg-faded-primary position-relative py-md-7 py-5">
                    <div className="container my-2 my-md-0">
                        <div className="row align-items-center">
                            <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
                                <Image src="/img/account/me2.svg" alt="Illustration" width={'495px'} height={'517px'} />
                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
                                <div className="mx-md-0 mx-auto" style={{ maxWidth: "500px" }}>
                                    <h2 className="mb-md-5 mb-4">What I do best</h2>
                                    {/* <!-- Media item (Service)--> */}
                                    <div className="d-md-flex align-items-start d-block mb-4 pb-2">
                                        <Image className="mb-md-0 mb-4" src="/img/demo/personal-portfolio/services/01.svg" width={'150px'} height={'150px'} alt="Icon" />
                                        <div className="ps-md-2">
                                            <h3 className="h6 mb-2">Mobile and Web Application Development</h3>
                                            <p className="mb-0 fs-sm">Three years expirience on developing scalable
                                                applications for web and mobile (Android
                                                and IOS) with Django, React and Flutter.
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- Media item (Service)--> */}
                                    <div className="d-md-flex align-items-start d-block mb-4 pb-2">
                                        <Image className="mb-md-0 mb-4" src="/img/demo/personal-portfolio/services/02.svg" width={'150px'} height={'150px'} alt="Icon" />
                                        <div className="ps-md-2">
                                            <h3 className="h6 mb-2">Cloud Computing</h3>
                                            <p className="mb-0 fs-sm">Experience with Microsoft Azure, AWS, Digital Ocean and
                                                Firebase. I&apos;ve been working for cloud data storage and management for three years</p>
                                        </div>
                                    </div>
                                    {/* <!-- Media item (Service)--> */}
                                    <div className="d-md-flex align-items-start d-block">
                                        <Image className="mb-md-0 mb-4" src="/img/demo/personal-portfolio/services/03.svg" width={'150px'} height={'150px'} alt="Icon" />
                                        <div className="ps-md-2">
                                            <h3 className="h6 mb-2">Webserve Security</h3>
                                            <p className="mb-0 fs-sm">I have a knowledge on web applications and server security. I am
                                                farmiliar with OWSAP top 10 vulnerabilities. With this help me to build secure applications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape shape-top shape-curve bg-body">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
                            <path fill="currentColor" d="M3000,185.4V0H0v185.4C496.4,69.8,996.4,12,1500,12S2503.6,69.8,3000,185.4z"></path>
                        </svg>
                    </div>
                </section>
                {/* <!-- Portfolio--> */}
                <section className="overflow-hidden" id="portfolio">
                    <div className="container py-lg-7 py-md-6 py-5 my-2 my-md-0">
                        <h2 className="mb-3 text-center">My portfolio</h2>
                        <p className="mb-4 pb-md-2 text-muted text-center">Most recent projects I have completed</p>
                        <div className="masonry-filterable">
                            {/* <!-- Portfolio nav (Filters)--> */}
                            <nav className="pb-3 mb-4" data-simplebar data-simplebar-auto-hide="false">
                                <ul className="masonry-filters nav nav-tabs justify-content-sm-center flex-nowrap text-nowrap mb-0">
                                    <li className="nav-item"><a className="nav-link active" href="#" data-group="all">All</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" data-group="illustrations">Illustrations</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" data-group="packaging">Packaging</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" data-group="branding">Branding</a></li>
                                </ul>
                            </nav>
                            {/* <!-- Portfolio grid--> */}
                            <div className="masonry-grid" data-columns="3">
                                {/* <!-- Portfolio item--> */}
                                <article className="masonry-grid-item" data-groups="[&quot;branding&quot;]"><a className="card card-hover h-100 border-0 shadow" href="#"><img className="card-img-top" src="img/demo/personal-portfolio/portfolio/01.jpg" alt="Article image" />
                                    <div className="card-body text-center">
                                        <h3 className="h5 mb-1">Apologetic robot holding flowers</h3><span className="fs-sm text-muted">Branding</span>
                                    </div></a></article>
                                {/* <!-- Portfolio item--> */}
                                <article className="masonry-grid-item" data-groups="[&quot;illustrations&quot;]"><a className="card card-hover h-100 border-0 shadow" href="#"><img className="card-img-top" src="img/demo/personal-portfolio/portfolio/02.jpg" alt="Article image" />
                                    <div className="card-body text-center">
                                        <h3 className="h5 mb-1">Woman walking her small dog</h3><span className="fs-sm text-muted">Illustrations</span>
                                    </div></a></article>
                                {/* <!-- Portfolio item--> */}
                                <article className="masonry-grid-item" data-groups="[&quot;branding&quot;]"><a className="card card-hover h-100 border-0 shadow" href="#"><img className="card-img-top" src="img/demo/personal-portfolio/portfolio/03.jpg" alt="Article image" />
                                    <div className="card-body text-center">
                                        <h3 className="h5 mb-1">Oil bottle branding</h3><span className="fs-sm text-muted">Branding</span>
                                    </div></a></article>
                                {/* <!-- Portfolio item--> */}
                                <article className="masonry-grid-item" data-groups="[&quot;illustrations&quot;]"><a className="card card-hover h-100 border-0 shadow" href="#"><img className="card-img-top" src="img/demo/personal-portfolio/portfolio/04.jpg" alt="Article image" />
                                    <div className="card-body text-center">
                                        <h3 className="h5 mb-1">Smiling woman</h3><span className="fs-sm text-muted">Illustrations</span>
                                    </div></a></article>
                                {/* <!-- Portfolio item--> */}
                                <article className="masonry-grid-item" data-groups="[&quot;packaging&quot;]"><a className="card card-hover h-100 border-0 shadow" href="#"><img className="card-img-top" src="img/demo/personal-portfolio/portfolio/05.jpg" alt="Article image" />
                                    <div className="card-body text-center">
                                        <h3 className="h5 mb-1">Drink can design</h3><span className="fs-sm text-muted">Packaging</span>
                                    </div></a></article>
                                {/* <!-- Portfolio item--> */}
                                <article className="masonry-grid-item" data-groups="[&quot;illustrations&quot;]"><a className="card card-hover h-100 border-0 shadow" href="#"><img className="card-img-top" src="img/demo/personal-portfolio/portfolio/06.jpg" alt="Article image" />
                                    <div className="card-body text-center">
                                        <h3 className="h5 mb-1">I love you hand gesture</h3><span className="fs-sm text-muted">Illustrations</span>
                                    </div></a></article>
                            </div>
                        </div>
                        <div className="pt-3 text-center"><a className="btn btn-primary" href="#"><i className="ai-refresh-cw me-2"></i>Load more</a></div>
                    </div>
                </section>
                {/* <!-- Testimonials--> */}
                <section id="testimonials" className="bg-faded-primary position-relative py-md-7 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7 order-md-1 order-2">
                                {/* <!-- Carousel--> */}
                                <div className="tns-carousel-wrapper">
                                    <div className="tns-carousel-inner" data-carousel-options="{&quot;gutter&quot;: 20, &quot;responsive&quot;: {&quot;0&quot;: {&quot;nav&quot;: true, &quot;controls&quot;: false}, &quot;991&quot;: {&quot;nav&quot;: false, &quot;controls&quot;: true}}}">
                                        {/* <!-- Carousel item--> */}
                                        <blockquote className="blockquote mt-3 mb-0">
                                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida dignissimos ducimus qui blanditiis praesentium voluptatum facere officia ratione quos esse corporis cum.</p>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti atque.</p>
                                            <footer className="d-flex align-items-center"><img className="rounded-circle" src="img/demo/personal-portfolio/testimonials/01.jpg" alt="Tim Brooks" width="42" />
                                                <div className="text-heading fs-md fw-medium ps-2 ms-1">Tim Brooks</div>
                                            </footer>
                                        </blockquote>
                                        {/* <!-- Carousel item--> */}
                                        <blockquote className="blockquote mt-3 mb-0">
                                            <p>Consectetur adipisicing elit. Minus facilis asperiores deleniti ipsum quod ipsa voluptate dicta quasi. Dignissimos accusantium temporibus sunt culpa minima, earum reprehenderit aspernatur inventore magnam labore.</p>
                                            <p>Velit modi neque placeat consequatur voluptatibus odit aut iste dolorum dolorem magnam.</p>
                                            <footer className="d-flex align-items-center"><img className="rounded-circle" src="img/demo/personal-portfolio/testimonials/02.jpg" alt="Tim Brooks" width="42" />
                                                <div className="text-heading fs-md fw-medium ps-2 ms-1">Serenity Edwards</div>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 offset-lg-1 order-md-2 order-1 mb-md-0 mb-grid-gutter"><img className="d-block mx-md-0 mx-auto" src="img/demo/personal-portfolio/testimonials/illustration.svg" alt="Illustration" /></div>
                        </div>
                    </div>
                    <div className="shape shape-bottom shape-curve bg-body">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
                            <path fill="currentColor" d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path>
                        </svg>
                    </div>
                </section>
                {/* <!-- Socials--> */}
                <section id="socialmedias" className="position-relative py-6 bg-no-repeat bg-position-center-bottom overflow-hidden" style={{ "backgroundImage": "url(img/demo/personal-portfolio/socials/bg-shape.png)" }}>
                    {/* <!-- Parallax--> */}
                    <div className="parallax">
                        <div className="parallax-layer" data-depth="0.1"><img src="img/demo/personal-portfolio/socials/figure-1.png" alt="Layer 1" /></div>
                        <div className="parallax-layer" data-depth="0.15"><img src="img/demo/personal-portfolio/socials/figure-2.png" alt="Layer 2" /></div>
                        <div className="parallax-layer" data-depth="0.25"><img src="img/demo/personal-portfolio/socials/figure-3.png" alt="Layer 3" /></div>
                    </div>
                    {/* <!-- Content--> */}
                    <div className="d-flex align-items-center position-absolute w-100 h-100" style={{ "top": "0", "left": "0", "zIndex": "9" }}>
                        <div className="container">
                            <h2 className="mb-4 pb-sm-3 text-center">Follow me</h2>
                            <div className="text-center">
                                <a className="btn btn-lg text-white mb-2 me-sm-4 me-2" href="#" style={{ "backgroundColor": "#ea4c89" }}>
                                    <i className="ai-instagram lead me-2"></i>
                                    Instagram
                                </a>
                                <a className="btn btn-lg text-white mb-2" href="#" style={{ backgroundColor: "#1969ff" }}>
                                    <i className="ai-twitter lead me-2"></i>
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* <!-- Footer--> */}
            <footer className="footer pb-4 mt-sm-n5">
                <div className="container fs-sm text-center">
                    <span className="text-muted">
                        © All rights reserved. Powered by {' '}
                    </span>
                    <a className="nav-link-style" href="https://adobus.co.tz/" target="_blank" rel="noreferrer">
                        Ado<b style={{ color: "#33CABB" }}>Bus</b>
                    </a>
                </div>
            </footer>
            {/* <!-- Back to top button--> */}
            <a className="btn-scroll-top" href="#top" data-scroll data-fixed-element>
                <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
                <i className="btn-scroll-top-icon ai-arrow-up"></i>
            </a>
        </>
    )
}