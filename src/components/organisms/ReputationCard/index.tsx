import Heading from "components/atoms/Heading";
// import Image from "components/atoms/Image";
import Text from "components/atoms/Text";
import React from "react";
import { mapModifiers } from "utils/functions";

type Variant = "default" | "blue" | "white";
export type CardProps = {
    icon: string;
    title: string;
    description?: string;
    variant? : Variant
};

const Card: React.FC<CardProps> = ({ icon, description, title, variant = "default" }) => (
    <div className={mapModifiers("o-card", variant)}>
        <div className='o-card-img'>
            {/* <Image src={icon} alt='ok' ratio='1x1' /> */}
               <img src={icon} alt='ok'  />
        </div>
        <div className='o-card-title'>
            <Heading modifiers={["700", "workSans", "16x20", "charcoal"]}>{title}</Heading>
        </div>

        <div className='o-card-description'>
            <Text modifiers={["400", "workSans", "14x16", "charcoal"]}>{description}</Text>
        </div>
    </div>
);
export default Card;
