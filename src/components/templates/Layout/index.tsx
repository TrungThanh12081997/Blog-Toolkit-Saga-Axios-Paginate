import Header from "components/organisms/Header";
import dummyDataHeader from "components/organisms/Header/dummyDataHeader";
import React from "react";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div className='t-layout'>
        <Header arrayNav={dummyDataHeader}/>
        {children}
    </div>
);

export default Layout;
