import React from 'react';

import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import { House, InfoCircle, Telephone } from 'react-bootstrap-icons';

const Sidebar = () => {
    return(
    <ProSidebar collapsed = 'true' style={{ height: "100vh"}}>
        <Menu iconShape="circle">
            <MenuItem icon={<House/>}>Home</MenuItem>
            <MenuItem icon={<InfoCircle/>}>About</MenuItem>
            <MenuItem icon={<Telephone/>}>Contact</MenuItem>
        </Menu>
    </ProSidebar>
    );
};

export default Sidebar