import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Text from "components/atoms/Text";
import React from "react";

interface AboutCardProps {
    title?: string;
    description?: string;
    contentButton:string;
    onClick?: ()=> void;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, onClick, description, contentButton }) => (
    <div className='m-aboutCard'>
        <div className='m-aboutCard-title'>
            <Heading modifiers={["700", "workSans", "white", "16x20"]}>{title}</Heading>
        </div>
        <div className='m-aboutCard-description'>
            <Text modifiers={["400", "workSans", "14x16", "white"]}>{description}</Text>
        </div>
        <div className='m-aboutCard-button'>
            <Button modifiers={["white"]} onClick={onClick} onKeyDown={onClick}>
                <Text modifiers={["600", "workSans", "curuleanBlue", "8x8"]}>{contentButton}</Text>
            </Button>
        </div>
    </div>
);

export default AboutCard;
