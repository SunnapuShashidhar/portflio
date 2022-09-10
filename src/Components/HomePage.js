import React from 'react'
import About from './about';
import BlogSection from './BlogSection';
import ProjectSection from './ProjectSection';
import Recomandations from './recomandations';
import Skillsection from './Skillsection';
import Title from './title';

function HomePage() {
    return (
        <div>
            <Title />
            <Recomandations />
            <Skillsection />
            {/* <ProjectSection/> */}
            <About />
            {/* <BlogSection/>  */}
        </div>
    )
}
export default HomePage;