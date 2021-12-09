import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from './firebase';
// for logged in user details
import {useStateValue} from './StateProvider';

function Sidebar() {
    //get the channels from db AND set
    const [channels, setchannels] = useState([]);
    // grabbing user from datalayer
    const [{ user }] = useStateValue();

    useEffect(() => {        
        db.collection('rooms').onSnapshot((snapshot)=>{
            setchannels(
                snapshot.docs.map(doc=>({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
                
                {/* creating components of different heading and different icons */}
            </div>
        
            <SidebarOption Icon = {InsertCommentIcon} title='Threads' />
            <SidebarOption Icon = {InboxIcon} title='Mentions & reactions' />
            <SidebarOption Icon = {DraftsIcon} title='Saved items' />
            <SidebarOption Icon = {BookmarkBorderIcon} title='Channel browser' />
            <SidebarOption Icon = {PeopleAltIcon} title='People & user groups' />
            <SidebarOption Icon = {AppsIcon} title='Apps' />
            <SidebarOption Icon = {FileCopyIcon} title='File browser' />
            <SidebarOption Icon = {ExpandLessIcon} title='Show less' />
            <hr />
            <SidebarOption Icon = {ExpandMoreIcon} title=' Channel' />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOptions title='Add Channel' />
            {/* connect to db and list all the channls */}
            {channels.map(channel => (
                <SidebarOption title= {channel.name} id={channel.id}/>
            ))}

        </div>
    )
}

export default Sidebar
