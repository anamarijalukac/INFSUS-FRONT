import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {AppBar, Box, Button, Card, CardMedia, Container, CssBaseline, Typography} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import useStyles from "./styles";
import img from "../../images/tamburice-home.jpg"


const Home = (setCurrentId) => {
    const classes = useStyles();
    let [search, setSearch] = useState('');
    const wishlist = useSelector((state) => state.wishlist)
    const history = useNavigate();
    const dispatch = useDispatch();


    return (

        <>
            <CssBaseline/>
            <Container disableGutters>
                <Card>
                    <Box sx={{position: 'relative'}}>
                        <CardMedia
                            component="img"
                            height="400px"
                            image={img}
                            alt="movie"
                        />
                        <Box className={classes.box}>
                            <Typography className={classes.boxText} variant="h3">TAMBURAŠKI ORKESTRI</Typography>
                            <Typography className={classes.boxText} variant="h5">Postani dio tamburaškog
                                orkestra!</Typography>

                        </Box>
                    </Box>
                </Card>

                <Container item className={classes.searchDiv}>
                    <AppBar className={classes.appBarSearch} color="inherit">
                        <Link to={"/orchestra/" }  style={{ textDecoration: 'none' }}>
                            <Button className={classes.searchButton} variant="contained"
                                    color="primary">Explore orchestras</Button>
                        </Link>
                    </AppBar>
                    <div>
                        <Typography className={classes.text} variant="h3">Want to find more about
                            orchestras?</Typography>
                        <Typography className={classes.text} variant="h5">Click the button to discover
                            more.</Typography>
                    </div>
                </Container>


            </Container>

        </>
    )
}
export default Home