import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar,Menu, MenuItem, Tab, Tabs, Toolbar, Typography, ListItemText, ListItemIcon } from '@material-ui/core';
import './Styles.scss';
import InputBase from '@material-ui/core/InputBase';
import {searchData, setTheme} from '../../redux/action/action';
import { resetData } from '../../redux/action/action';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [toggle, setToggle] = useState(false);
    const showProfile = () => {
        setOpen(!open);
    };
    const theme = useSelector(state => state.infoReducer.theme)
    const dispatch = useDispatch();

    const search = () => {
        const searchName = searchData(input.toLowerCase());
        dispatch(searchName);
    };
    useEffect(()=> {
        const reset = resetData(input);
        dispatch(reset);
    }, [input])
    const handleChange = (e) => {
        setInput(e.target.value)
    };

    const settogle = () => {
        setToggle(!toggle);
    }
    useEffect(()=> {
        if (toggle) {
            var a = "light"
        } else {
            var a = "dark"
        }
        const reset = setTheme(a);
        dispatch(reset);
    }, [toggle])
    return (
        <div >
            <AppBar className={theme === "dark" ? "navbars dark" : "navbars light"}>
                <Toolbar>
                    <i class="fas fa-bars" />
                    <h1 className="navbars-typo">
                        Wavelabs
                    </h1>
                    <Tabs className="navbars-select">
                        <select>
                            <option>a</option>
                            <option>b</option>
                        </select>
                    </Tabs>
                    <div className="navbars-search">
                        <button type="button" onClick={search}><i className="fas fa-search" /></button>
                        <InputBase className="navbars-search-inp"
                            placeholder="Search (Option + Q)"
                            onChange={handleChange}
                            value={input}
                        />
                    </div>
                    
                    <div class="mt-android-orange" onClick={settogle}> 
                        <input id="1" type="checkbox"  />
                        <label for="1"></label>  
                    </div>
                    <i class="fas fa-cog" />
                    <div type="button" className="btns" onClick={showProfile}>
                        <img src="/images/duy.jpg" alt="profile-img" />
                    </div>
                </Toolbar>
            </AppBar>
            <div className={open? "btns-menu" : "btn-menuoff"} >
                <ul>
                    <button className="btns-a"><span className="far fa-user-circle"></span><li>My Profile</li></button>
                    <button className="btns-b"><span className="fas fa-cog"></span><li>My Setting</li></button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
