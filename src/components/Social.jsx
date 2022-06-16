import ParallaxComponent from "./ParallaxComponet"
import Content from "./SocialContent"

export default function Social() {
    return (
        <section id="socialmedias" className="position-relative py-6 bg-no-repeat bg-position-center-bottom overflow-hidden"
            style={{ "backgroundImage": "url(img/demo/personal-portfolio/socials/bg-shape.png)" }}>
            <ParallaxComponent />
            <Content />
        </section>
    )
}