import React from 'react';
import NavBar from './NavBar';

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <h1>Base Layout</h1> */}
            <main>{children}</main>
        </div>
    );
};

export default BaseLayout;