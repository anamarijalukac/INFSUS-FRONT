import React, {useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import useStyles from "./styles";
import Album from "./Album/Album"


const Discography = () => {

    const classes = useStyles();
    const {id} = useParams()
    const [wishlist, setWishlist] = useState([])

    const location = useLocation();
    let orchestra = location.state;


    let albums = orchestra.discography.albumList


    return (
        <Paper className={classes.all}>

            <Container item className={classes.orchestraSticky}>
                <Typography className={classes.text} variant="h3">DISCOGRAPHY</Typography>
            </Container>


            <Grid className={classes.mainContainer} container alignItems={"stretch"} spacing={3}>

                {albums.map((album) => album == null ? <div/> : (

                        <Album album={album}/>


                    )
                )}
            </Grid>


        </Paper>


    );


}

export default Discography