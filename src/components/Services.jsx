import WhatIDoBest from "./WhatIDoBest"

export default function Services({skills}) {
    return (
        <section id="myskills" className="bg-faded-primary position-relative py-md-7 py-5">
            <div className="container my-2 my-md-0">
                <WhatIDoBest skills={skills}/>
            </div>
            <div className="shape shape-top shape-curve bg-body">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
                    <path fill="currentColor" d="M3000,185.4V0H0v185.4C496.4,69.8,996.4,12,1500,12S2503.6,69.8,3000,185.4z"></path>
                </svg>
            </div>
        </section>
    )
}