import React from 'react'
import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Footer from '../components/Footer'
import BackToToP from '../components/BackToTop'
import Portfolio from '../components/Portifolio'
import Social from '../components/Social'

import fsPromises from 'fs/promises';
import path from 'path'


export default function Home({ skills, portfolio }) {
    return (
        <React.Fragment>
            <main className="page-wrapper">
                <NavBar />
                <Intro />
                <Services skills={skills} />
                <Portfolio  portfolio={portfolio}/>
                <Social />
            </main>
            <Footer />
            <BackToToP />
        </React.Fragment>
    )
}

export async function getStaticProps() {
    const fileSkills = path.join(process.cwd(), 'assets/jsons/skills.json');
    const filePortfolio = path.join(process.cwd(), 'assets/jsons/portfolio.json');

    const skillsData = await fsPromises.readFile(fileSkills);
    const portfolioData = await fsPromises.readFile(filePortfolio);

    const skills = JSON.parse(skillsData);
    const portfolio = JSON.parse(portfolioData);

    return {
        props: {
            skills: skills,
            portfolio:portfolio
        }
    }
}