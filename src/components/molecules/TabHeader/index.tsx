/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Text from "components/atoms/Text";
import React from "react";

interface TabHeaderProps {
    title: string;
    link?: string;
    onClick?: () => void;
    active?: boolean;
}

const TabHeader: React.FC<TabHeaderProps> = ({ title, link, onClick, active }) => (
        <div className='m-tabHeader' onClick={onClick}>
            {link ? (
                <a href={link}>
                    <Text
                        modifiers={
                            active
                                ? ["workSans", "14x20", "capitalize", "600", "atomicTangerine"]
                                : ["workSans", "14x20", "capitalize", "400", "eerieBlack"]
                        }
                    >
                        {title}
                    </Text>
                </a>
            ) : (
                <Text
                    modifiers={
                        active
                            ? ["workSans", "14x20", "capitalize", "600", "atomicTangerine"]
                            : ["workSans", "14x20", "capitalize", "400", "eerieBlack"]
                    }
                >
                    {title}
                </Text>
            )}
        </div>
    );

export default TabHeader;
