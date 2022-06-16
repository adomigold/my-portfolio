import Image from "next/image"
import Skills from "../components/Skills"

export default function WhatIDoBest({skills}) {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-5 mb-md-0 mb-5 pb-md-0 pb-3">
                    <Image src="/img/account/me2.svg" alt="Illustration" width={'495px'} height={'517px'} />
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-7 text-md-start text-center">
                    <Skills skills={skills}/>
                </div>
            </div>
        </>
    )
}