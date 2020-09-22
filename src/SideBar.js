import React from 'react';
import './SideBar.css';
import SideBarRow from './SideBarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import  ExpandMoreOutLined  from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';

const SideBar = () => {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className="sidebar">
            <SideBarRow 
                src={user.photoURL}
                title={user.displayName}
            />
            <SideBarRow
                 title="COVID-19 Information Center"
                 Icon={LocalHospitalIcon}
            />
            <SideBarRow 
                title="Pages" 
                Icon={EmojiFlagsIcon}
            />
            <SideBarRow 
                title="Friends"
                Icon={PeopleIcon}
            />
            <SideBarRow 
                title="Messenger"
                Icon={ChatIcon}
            />
            <SideBarRow 
                title="Marketplace"
                Icon={StoreFrontIcon}
            />
            <SideBarRow 
                title="Videos"
                Icon={VideoLibraryIcon}
            />
            <SideBarRow 
                title="Marketplace"
                Icon={ExpandMoreOutLined}
            />
        </div>
    )
}

export default SideBar
