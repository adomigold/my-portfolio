import Image from "next/image"

export default function Intro() {
    return (
        <section id="whoami" className="container mb-3 my-md-0 py-5 py-md-6">
            <div className="row align-items-center">
                <div className="col-lg-4 col-md-5 order-md-1 order-2 text-md-start text-center">
                    <h1 className="display-4 mb-lg-4 mb-3">Hi, I’m Adolph</h1>
                    <h2 className="mb-lg-5 mb-4 text-muted">A full-stack software developer</h2>
                    <div className="text-nowrap">
                        <a className="btn btn-translucent-primary me-3" href="docs/Resume.pdf">
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
    )
}