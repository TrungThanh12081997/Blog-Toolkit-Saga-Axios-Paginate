import Image from "components/atoms/Image";
import Container from "components/molecules/Container";
import React from "react";
import aboutImage from "assets/images/about.png";
import AboutCard from "components/molecules/AboutCard";

interface AboutTemplateProps {}

const AboutTemplate: React.FC<AboutTemplateProps> = () => {
    const data = {
        title: "About us",
        contentButton: "More on Our History",
        description:
            "For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.</br> </br> </br> </br> </br> We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.",
    };
    return (
        <div className='t-aboutTemplate'>
            <Container>
                <div className='t-aboutTemplate-bg'>
                    <Image src={aboutImage} ratio='362x268' />
                </div>
                <div className='t-aboutTemplate-content'>
                    <AboutCard {...data}/>
                </div>
            </Container>
        </div>
    );
};

export default AboutTemplate;
