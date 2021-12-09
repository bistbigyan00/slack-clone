import './Header.css'
import React from 'react'
import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useNavigate } from 'react-router-dom'
// for logged in user details
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer'


function Header() {
    const [{ user }] = useStateValue();
    
    // navigates to certain url
    const navigate = useNavigate();
    const [state, dispatch] = useStateValue();

    const logOut = async() =>{
        dispatch({
            type: actionTypes.SET_USER,
            user: null
        });
        // after setting user to null, return to homepage
        navigate('/');
    }

    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Clever Programmer"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
                <button onClick={logOut}>Log Out</button> 
            </div>
        </div>
    )
}

export default Header
