import Image from "next/image"

export default function Skills({ skills }) {
    return (
        <>
            <div className="mx-md-0 mx-auto" style={{ maxWidth: "500px" }}>
                <h2 className="mb-md-5 mb-4">What I do best</h2>
                {skills.data.map(skill => (
                    <div key={skill.title} className="d-md-flex align-items-start d-block mb-4 pb-2">
                        <Image className="mb-md-0 mb-4" src={skill.image} width={'150px'} height={'150px'} alt="Icon" />
                        <div className="ps-md-2">
                            <h3 className="h6 mb-2">{skill.title}</h3>
                            <p className="mb-0 fs-sm">{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}