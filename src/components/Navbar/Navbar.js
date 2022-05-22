import {AppBar, Button, CssBaseline, Drawer, IconButton, MenuItem, Toolbar, Typography} from "@material-ui/core";
import React, {Fragment, useEffect, useState} from 'react';
import useStyles from './styles.js';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";


const Navbar = ({currentId}) => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()




    const onOpen = e => {
        setAnchorEl(e.currentTarget);
    };

    const onClose = () => {
        setAnchorEl(null);
    };

    const onSelectHome = () => {
        setAnchorEl(null);
        dispatch()
    };

    const onSelect = () => {
        setAnchorEl(null);
        dispatch()
    };


    const logout = () => {
        localStorage.clear()
        setUser(null)
        navigate('/')
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])


    return (
        <>

            <CssBaseline/>
            <AppBar className={classes.appBar}>
                <div className={classes.fragment}>
                    <Fragment>
                        <IconButton onClick={onOpen}
                                    classes={classes.iconButton}>
                            <MenuIcon style={{fill: "white"}}/>
                        </IconButton>
                    </Fragment>
                    <Fragment>
                        <Drawer classes={{paper: classes.paper}}
                                anchor={"left"}
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={onClose}>
                            <Link to={"/"}
                                  className={classes.menuItem}>
                                <MenuItem

                                    key={1}
                                    onClick={onSelectHome}>
                                    Home
                                </MenuItem>
                            </Link>
                            <Link to={"/orchestra/"}
                                  className={classes.menuItem}>
                                <MenuItem
                                    key={2}
                                    onClick={onSelect}
                                >
                                    ORCHESTRAS
                                </MenuItem>
                            </Link>
                            <Link to={"/user/"+currentId}
                                  className={classes.menuItem}>
                                <MenuItem
                                    key={2}
                                    onClick={onSelect}
                                >
                                    PROFILE
                                </MenuItem>
                            </Link>



                        </Drawer>
                    </Fragment>
                </div>


                <Toolbar>
                    {user?.response ? (
                        <div className={classes.toolbar}>

                            <Typography variant="h6" color={"secondary"}>{user?.response.name}</Typography>
                            <Button className={classes.signup} variant="contained" color="secondary"
                                    onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar