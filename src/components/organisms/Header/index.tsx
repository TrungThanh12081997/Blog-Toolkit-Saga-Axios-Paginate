/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "assets/icons/ic_logo.svg";
import Image from "components/atoms/Image";
import TabHeader from "components/molecules/TabHeader";
import Container from "components/molecules/Container";

interface HeaderProps {
    arrayNav:{ title:string, link:string }[]
}

const Header: React.FC<HeaderProps> = ({ arrayNav }) => (
        <div className='o-header'>
            <Container>
                <div className='o-header-wrapper'>
                    <div className='o-header-logo'>
                        <a href=''>
                            <Image src={logo} ratio='116x34' />
                        </a>
                    </div>
                    <div className='o-header-nav'>
                        {arrayNav &&  arrayNav.map((item, idx) => (
                            <TabHeader key={`${idx.toString()}`} {...item} active />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
export default Header;
