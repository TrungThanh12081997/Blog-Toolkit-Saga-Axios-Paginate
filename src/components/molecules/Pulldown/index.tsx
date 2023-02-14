/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useRef, useState } from "react";
// import Paragraph from "components/atoms/Paragraph";
import Text from "components/atoms/Text";
import useClickOutside from "hooks/useClickOutside";
import { mapModifiers } from "utils/functions";

export interface OptionType {
    id?: string | number;
    value?: string ;
    label: string;
    slug?: string;
}

interface PulldownProps {
    options: OptionType[];
    valuePullDown?: OptionType;
    handleSelect: (option: OptionType) => void;
    closeOnClickOutside?: boolean;
    label?: string;
    variant?: "secondary";
    placeholder?: string;
    error?: string ;
    disabled?: boolean;
}

const Pulldown: React.FC<PulldownProps> = ({
    options,
    valuePullDown,
    handleSelect,
    closeOnClickOutside,
    label,
    variant,
    placeholder,
    error,
    disabled,
}) => {
    const [open, setOpen] = useState(false);

    const pulldownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(() => {
        if (closeOnClickOutside) {
            setOpen(false);
        }
    }, [closeOnClickOutside]);

    useClickOutside(pulldownRef, handleClickOutside);
    const handleClick = () => !disabled && setOpen(!open);
    return (
        <div className={mapModifiers("m-pulldown", error && "error")} ref={pulldownRef}>
            <div className={mapModifiers("m-pulldown_wrap", variant)}>
                <div
                    className={mapModifiers(
                        "m-pulldown_container",
                        open && "open",
                        variant,
                        disabled && "disabled",
                    )}
                    onClick={handleClick}
                >
                    {label && (
                        <span className='m-pulldown_label'>
                            <Text modifiers={["14x16"]}>{label}</Text>
                        </span>
                    )}
                    <div
                        className={mapModifiers(
                            "m-pulldown_container_title",
                            !valuePullDown && "placeholder",
                        )}
                    >
                        {valuePullDown ? valuePullDown.label : placeholder}
                    </div>
                    <div className='m-pulldown_container_arrow' />
                    <ul className='m-pulldown_container-menu'>
                        {options.length > 0 &&
                            options.map((option, index) => (
                                <li
                                    key={`pulldown-option-${index.toString()}`}
                                    className='m-pulldown_container-menu-item'
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            {error && (
                <div className='u-mt-4'>
                    <Text modifiers={["electricCrimson", "14x16"]}>{error}</Text>
                </div>
            )}
        </div>
    );
};

Pulldown.defaultProps = {
    closeOnClickOutside: true,
};

export default Pulldown;
